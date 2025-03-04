import random

def create_empty_board(size):
    return [[" " for _ in range(size)] for _ in range(size)]

def display_board(board):
    for row in board:
        print("".join(row))

def place_word(board, word, row, col, direction):
    if direction == "horizontal":
        board[row][col] = "X"
        for i in range(len(word)):
            board[row][col + i + 1] = word[i]
    elif direction == "vertical":
        board[row][col] = "X"
        for i in range(len(word)):
            board[row + i + 1][col] = word[i]

# Checking if we can place word in this position in board
def can_place_word(board, word, row, col, direction):
    if direction == "horizontal":
        if col + len(word) + 1 >= len(board):
            return False
        for i in range(len(word)):
            if board[row][col + i + 1] != " " and board[row][col + i + 1] != word[i] and board[row][col + i + 1] != "X":
                return False
    elif direction == "vertical":
        if row + len(word) + 1 >= len(board):
            return False
        for i in range(len(word)):
            if board[row + i + 1][col] != " " and board[row + i + 1][col] != word[i] and board[row + i + 1][col] != "X":
                return False
    return True
        
# Function to check if in any of the existing words we can insert some given word
def find_similar_words(board, word):
    
    # Adding iterating thourgh random cols and rows -> eliminating having definition elements next to each other on 1st row
    
    for row in range(len(board)):
        for _ in range (len(board)):
            col = random.randint(0, len(board) - 1)
            # if board[row][col]
        # for col in range(len(board)):
            if board[row][col] in word:
                for direction in ["horizontal", "vertical"]:
                    if can_place_word(board, word, row, col, direction):
                        return row, col, direction
    return None, None, None

with open("./words.txt", "r") as file:
    words = file.read().splitlines()

words.sort(key=len, reverse=True)

# limit word length to 10
words = [word for word in words if (5 <= len(word) <= 10)]

# Getting rid off of the words that contain letter "x" in them -> otherwise board will fail to skip possible errors
words =[word.lower() for word in words if "x" not in word]


board_size = 20
board = create_empty_board(board_size)

first_word = words.pop(0)
place_word(board, first_word, 0, 0, "horizontal")

# Iterating through words to create a board
for word in words:
    row, col, direction = find_similar_words(board, word)
    
    if row is not None:
        place_word(board, word, row, col, direction)
        print(word, "passed")
    else: 
        print(word, "failed")
        pass

display_board(board)