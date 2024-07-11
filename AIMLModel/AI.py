# %%
from transformers import GPT2Tokenizer, GPT2LMHeadModel

tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2LMHeadModel.from_pretrained('gpt2')

print("Environment setup complete.")


# %%


from datasets import load_dataset
import json

with open('ics_protocols.json', 'r') as f:
    ics_protocols_data = json.load(f)

with open('emd_protocols.json', 'r') as f:
    emd_protocols_data = json.load(f)

emergency_protocols = ics_protocols_data['ics_protocols'] + emd_protocols_data['emd_protocols']

convai2_dataset = load_dataset('conv_ai_2', split='train', trust_remote_code=True)

def preprocess_conversations(dataset):
    conversations = []
    for data in dataset:
        dialog = data['dialog']
        if len(dialog) > 1:
            conversation = {
                "input": dialog[-2]['text'],  
                "response": dialog[-1]['text']  
            }
            conversations.append(conversation)
    return conversations

def preprocess_protocols(protocols):
    processed_protocols = []
    for protocol in protocols:
        scenario = protocol.get("scenario", "unknown scenario")
        steps = protocol.get("steps", [])
        if steps:
            processed_protocols.append({
                "scenario": scenario,
                "steps": steps
            })
    return processed_protocols

preprocessed_conversations = preprocess_conversations(convai2_dataset)

preprocessed_protocols = preprocess_protocols(emergency_protocols)

with open('conversations.json', 'w') as f:
    json.dump(preprocessed_conversations, f)

with open('processed_emergency_protocols.json', 'w') as f:
    json.dump(preprocessed_protocols, f)

print("Data collection and preprocessing complete.")


# %%

!pip install accelerate -U
!pip install transformers[torch]
!pip install pandas

import accelerate
import transformers

print("Accelerate version:", accelerate.__version__)
print("Transformers version:", transformers.__version__)

import json
import pandas as pd
import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel, Trainer, TrainingArguments
from datasets import Dataset

with open('conversations.json', 'r') as f:
    conversations_data = json.load(f)

with open('processed_emergency_protocols.json', 'r') as f:
    protocols_data = json.load(f)

csv_file_path = '911.csv'
csv_data = pd.read_csv(csv_file_path)

print(csv_data.head())

def extract_csv_data(row):
    description = row['desc']
    title = row['title']
    timestamp = row['timeStamp']
    township = row['twp']
    address = row['addr']
    return f"Emergency: {title}\nDescription: {description}\nTimestamp: {timestamp}\nTownship: {township}\nAddress: {address}"

csv_texts = csv_data.apply(extract_csv_data, axis=1).tolist()

combined_data = conversations_data[:1000] + protocols_data[:200] + [{"input": text, "response": ""} for text in csv_texts[:200]]

def prepare_data(data):
    texts = []
    for item in data:
        if 'input' in item and 'response' in item:
            texts.append(f"User: {item['input']}\nAI: {item['response']}")
        elif 'scenario' in item and 'steps' in item:
            steps_text = "\n".join(item['steps'])
            texts.append(f"Scenario: {item['scenario']}\nSteps:\n{steps_text}")
    return texts

training_texts = prepare_data(combined_data)

dataset = Dataset.from_dict({"text": training_texts})

tokenizer = GPT2Tokenizer.from_pretrained('gpt2')

tokenizer.pad_token = tokenizer.eos_token

def tokenize_function(examples):
    inputs = tokenizer(examples['text'], padding='max_length', truncation=True, max_length=128)  # Reduce max_length to 128
    inputs['labels'] = inputs['input_ids'].copy()  # Copy input_ids to labels
    return inputs

tokenized_data = dataset.map(tokenize_function, batched=True)

model = GPT2LMHeadModel.from_pretrained('gpt2')

training_args = TrainingArguments(
    output_dir='./results',
    num_train_epochs=3,
    per_device_train_batch_size=1, 
    save_steps=10_000,
    save_total_limit=2,
    logging_steps=500,
    evaluation_strategy="no",
    disable_tqdm=False,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_data,
)

trainer.train()

model.save_pretrained('./fine_tuned_model')
tokenizer.save_pretrained('./fine_tuned_model')

print("Model fine-tuning complete and saved to './fine_tuned_model'.")


# %%

import torch
from transformers import GPT2Tokenizer, GPT2LMHeadModel

model_path = './fine_tuned_model'
tokenizer = GPT2Tokenizer.from_pretrained(model_path)
model = GPT2LMHeadModel.from_pretrained(model_path)

tokenizer.pad_token = tokenizer.eos_token
model.config.pad_token_id = tokenizer.pad_token_id

def generate_response(prompt, max_length=100):
    inputs = tokenizer.encode(prompt, return_tensors='pt')
    outputs = model.generate(inputs, max_length=max_length, num_return_sequences=1, pad_token_id=tokenizer.pad_token_id)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return response

sample_prompt = "What to do during an landslide?"

response = generate_response(sample_prompt)
print("Prompt:", sample_prompt)
print("Response:", response)
