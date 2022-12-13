from ponicode import Demo

class Test_Demo_Add:
    def test_Add_1(self):
        result = Demo.Add(1, 0)

    def test_Add_2(self):
        result = Demo.Add(1, 1)

    def test_Add_3(self):
        result = Demo.Add(1, -5.48)

    def test_Add_4(self):
        result = Demo.Add(0, 100)

    def test_Add_5(self):
        result = Demo.Add(-100, 100)

    def test_Add_6(self):
        result = Demo.Add(0, 0)

