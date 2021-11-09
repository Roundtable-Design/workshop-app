#!/bin/bash

echo "Killing currently running processes..."
killall node

echo "Pulling latest code..."
git pull

echo "Building frontend..."
cd frontend
nohup npm i; npm run build &>./log &


echo "Running the backend (in the background)..."
cd ../backend
nohup npm i; node . &>./log &


echo "Running webhook (in the background)..."
cd ..
nohup npm i; node ./webhook &>./log &
