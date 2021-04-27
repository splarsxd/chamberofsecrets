from os import system
import requests
system("title Insomnia")
system("color c")


db = {"email":"stabbing.steve@fuskeluring.hack", "password":"grillkorv123"}

def menu():
	system("cls")

	print("A) LOGIN")
	print("B) ME")
	print("C) RESET")
	print("D) GENERATE\n")
	print("F) CHANGE PASSWORD IN DEFAULT DB\n\n")

	menuselect = input(">> ")
	if not menuselect:
		menu()
	
	if menuselect == "a":
		login()

	elif menuselect == "b":
		info()

	elif menuselect == "c":
		reset()

	elif menuselect == "d":
		generate()

	elif menuselect == "f":
		changepswd()

	else:
		print("\nPlease choose one of the options above.")
		system("timeout 2 >nul")
		menu()



def login():
	system("cls")
	try:
		global token
		token = {"token":"token"}

		tokenfromserver = requests.post("http://localhost:8080/login", json=db).json()["token"]
		token["token"] = tokenfromserver
		print(token)

		system("pause >nul 2>&1")
		menu()

	except:
		print("Either you've entered the wrong password or the server is not even running.")
		system("timeout 2 >nul")
		menu()



def info():
	system("cls")

	try:
		print(requests.get("http://localhost:8080/me", json=db).json())
		system("pause >nul 2>&1")
		menu()

	except:
		print("Server is not even running.")
		system("timeout 2 >nul")
		menu()



def reset():
	system("cls")

	try:
		db["password"] = input("New Password: ")
		if not db["password"]:
			print("\nYou need to enter a password first.")
			system("timeout 2 >nul")
			reset()

		print(f'\n{requests.patch("http://localhost:8080/me", json=db).json()["message"]}')
		system("pause >nul 2>&1")
		menu()

	except:
		print("\nServer is not even running.")
		system("timeout 2 >nul")
		menu()



def generate():
	system("cls")

	try:
		global token
		print(requests.get("http://localhost:8080/generate", json=token).json())
		system("pause >nul 2>&1")
		menu()

	except:
		print("Either you need a token or the server isn't even running.")
		system("timeout 2 >nul")
		menu()



def changepswd():
	system("cls")
	try:
		db["password"] = input("New Password: ")
		if not db["password"]:
			print("\nYou need to enter a password.")
			system("timeout 2 >nul")
			changepswd()
		print("Password in the local register have been updated.")
		menu()

	except:
		print("\nthere's literally no default database to begin with.")
		system("timeout 2 >nul")
		menu()

menu()