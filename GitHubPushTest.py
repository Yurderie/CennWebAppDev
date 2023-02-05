# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

class Employee:
    college_name ="Centennial College"
    def __init__(self, id, name):
        self.id = id
        self.name = name
    def print_info(self):
        print(f'Employee id: {self.id}, Employee Name: {self.name}')        
        
class ContractEmp(Employee):
    def __init__ (self, id, name):
        super().__int__(id,name)
        