class StringOnObj:
    def __init__(seft, text):
        seft.text = text

    def onObj(text):
        char_count = {}

        for char in text:
            if char in char_count:
                char_count[char] += 1
            else:
                char_count[char] = 1