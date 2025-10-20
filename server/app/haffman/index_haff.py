class StringOnObj:
    def onObj(text):
        char_count = {}

        for char in text:
            if char in char_count:
                char_count[char] += 1
            else:
                char_count[char] = 1

        return char_count
    
class onTree: #создание дерева "библиотека"
    def __init__(self):
        self.graph = {}
        self.positions = {}

    def newVertex(self, index):
        if index not in self.graph:
            self.graph[index] = []
            self.positions[index] = None

    def add_child(self, parent, child, position=1):
        self.newVertex(parent)
        self.newVertex(child)

        self.graph[parent].append(child)
        self.positions[child] = position

class newTrees: #создание дерева программного
    def __init__(self, obj):
        self.tree = onTree()
        self.obj = obj

    def addVertex(self):
        small_items = sorted(self.obj.items(), key=lambda x: x[1])[:2] #находим 2 минимальных  значения

        for key, value in small_items: #удаление их из основного словаря
            del self.obj[key]

        self.tree.add_child('vertex', small_items[0])
        self.tree.add_child('vertex', small_items[1], position=1)

    