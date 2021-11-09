#!/bin/bash

echo "Killing currently running processes..."
killall node

echo "Pulling latest code..."
git pull

echo "Building frontend..."
cd frontend
npm i
npm run build

echo "Running the backend (in the background)..."
cd ../backend
npm i
nohup node . &>./log &

echo "Running webhook (in the background)..."
cd ..
npm i
nohup node ./webhook &>./log &