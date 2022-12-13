import Demo

class Test_Demo_Add:
    def test_Add_1(self):
        result = Demo.Add(10, 10)
        assert result == 20

    def test_Add_2(self):
        result = Demo.Add(100, 1)
        assert result == 101

    def test_Add_3(self):
        result = Demo.Add(100, -100)
        assert result == 0

    def test_Add_4(self):
        result = Demo.Add(-5.48, -5.48)
        assert result == -10.96

    def test_Add_5(self):
        result = Demo.Add(1, 1)
        assert result == 2

    def test_Add_6(self):
        result = Demo.Add(100, 100)
        assert result == 200


'''call here'''

Test_Demo_Add = Test_Demo_Add()
print(Test_Demo_Add.test_Add_1())