class StringOnObj:
    @staticmethod
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
        self.obj = obj.copy()
        self.codes = {}

    def addVertex(self):
        if len(self.obj) < 2:
            return None
        
        small_items = sorted(self.obj.items(), key=lambda x: x[1])[:2] #находим 2 минимальных  значения

        for key, _ in small_items:
            del self.obj[key]

        new_key = f'({small_items[0][0]} + {small_items[1][0]})'
        new_value = small_items[0][1] + small_items[1][1]

        self.obj[new_key] = new_value

        self.tree.add_child(new_key, small_items[0][0], position=1)
        self.tree.add_child(new_key, small_items[1][0], position=0)

    def build_tree(self):
        while len(self.obj) > 1:
            self.addVertex()

        return list(self.obj.keys())[0] if self.obj else None
    
    def generate_codes(self, node, current_codes=''):
        if node in self.tree.graph and self.tree.graph[node]:
            for child in self.tree.graph[node]:
                bit = str(self.tree.positions[child])
                self.generate_codes(child, current_codes+bit)
        else:
            self.codes[node] = current_codes

class HuffmanRes:
    def __init__(self, text):
        self.text = text
        self.char_freq = StringOnObj.onObj(text)
        self.tree_builder = newTrees(self.char_freq)
        self.codes = {}
    
    def build_codes(self):
        root = self.tree_builder.build_tree()
        if root:
            self.tree_builder.generate_codes(root, '')
            self.codes = self.tree_builder.codes
        return self.codes
    
    def encode_text(self):
        if not self.codes:
            self.build_codes()
        
        encoded_text = ''
        for char in self.text:
            if char in self.codes:
                encoded_text += self.codes[char]
            else:
                raise ValueError(f"Character '{char}' not found in Huffman codes")
        
        return encoded_text
