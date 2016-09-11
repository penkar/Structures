require_relative '../spec_helper.rb'
board_valid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
board_invalid = [
  [2, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]


checker = Sudoku.new

describe Sudoku do
  it "Should correctly validate correct board." do
    expect(checker.sudoku(board_valid)).to eq(true)
  end

  it "Should correctly invalidate board that does not have 9 rows." do
    expect(checker.sudoku(board_valid[0..7])).to eq(false)
  end

  it "Should correctly invalidate board that are incorrect." do
    expect(checker.sudoku(board_invalid)).to eq(false)
  end

  it "Row validator should look for values 1-9" do
    expect(checker.send(:sector_validate, [1,2,3,4,5,6,7,8,9])).to eq(true)
  end

  it "Row validator should look for 9 unique values" do
    expect(checker.send(:sector_validate, [1,1,1,1,1,1,1,1,1])).to eq(false)
  end

  it "Row validator should validate row adds up to 45" do
    expect(checker.send(:sector_validate, [1,2,3,4,5,6,7,8,90])).to eq(false)
  end
end
