class Sudoku
  def sudoku(board)
  	return false if board.length != 9
  	board.each {|set| return false if !sector_validate(set) }
    board.transpose.each { |set| return false if !sector_validate(set) }
    0.upto(2) do |idx|
      0.upto(2) do |idx2|
        row = []
        row.concat(board[idx * 3][idx2 * 3 .. idx2* 3 + 2])
        row.concat(board[idx * 3+ 1][idx2 * 3 .. idx2* 3 + 2])
        row.concat(board[idx * 3+ 2][idx2 * 3 .. idx2* 3 + 2])
        return false if !sector_validate(row)
      end
    end
  	true
  end

  private
  def sector_validate(row)
    nums = Hash.new(0)
    for n in row do
      nums[n] += 1
    end
    return false if nums.length != 9
    return false if nums.keys.inject(:+) != 45
    true
  end
end
