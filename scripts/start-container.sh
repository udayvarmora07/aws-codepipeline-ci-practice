#!/bin/bash

set -e

docker run --name cicd-container -d -p 8003:8000 uday0710/test-cicd-pipeline:latest