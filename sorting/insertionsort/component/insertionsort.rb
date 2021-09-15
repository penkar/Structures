class Array
  def insertionsort
    len = self.length
    if len > 1 do
      current = self.first
      self.each_with_index do |number, idx|
        

      end
    end
    return self
  end
end



# const InsertionSort = (array) => {
#   const length = array.length;
#   if(length > 1) {
#     for(let i = 1; i < length; i++) {
#       let current = array[i];
#       for(let j = 0; j < length; j++) {
#         let lowCurrent = array[j];
#         if(current <= lowCurrent) {
#           array.splice(i, 1);
#           array.splice(j, 0, current);
#           break;
#         }
#       }
#     }
#   }
#   return array;
# }