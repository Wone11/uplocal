class User:
    def __init__(self, id, name, website, description, email, gender, phone_number, username):
        self.id = id
        self.name = name
        self.website = website
        self.description = description
        self.email = email
        self.gender = gender
        self.phone_number = phone_number
        self.username = username
        
    def Display(self,id,website,description,email,gender,phone_number,username):
        print('User ID :' ,id,' \n User Description: ',description,'\n Website ',website,'\n User Email :', email, '\n Gender: ',gender,'\n Phone Number ',phone_number,'\n User Name:', username)
    

    def Somethingelse(self):
        print('New something else')
    
    def Dosomething(self):
        print('Some thing else waiting')
        
# Call a method Here    
if __name__ == '__main__':
    user = User(24, "Jon Doe", "http://mywebsite.com", "I am an actor", "example@example.com", "M", "+12345678", "johndoe")
    user.Display(user.id,user.website,user.description,user.email,user.gender,user.phone_number,user.username)
    
    user.Dosomething()