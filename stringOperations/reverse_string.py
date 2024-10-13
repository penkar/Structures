def reverse_string(s : str) -> str:
    """
    Reverses a string.
    
    Args:
      s (str): The string to reverse.
    
    Returns:
      str: The reversed string.
    """
    # Instead of s[::-1] or "".join(reversed(s))
    new_string = ""
    for char in s:
        new_string = char + new_string

    return new_string

if __name__ == "__main__":
    print("Reverse String Tests")
    print(reverse_string("asdf") == "fdsa")