from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["IP_lab2"]
collection = db["users"]
