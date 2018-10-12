(defn mergs-lists [[l & lrest :as L] [r & rrest :as R] new-list]
  "Function will take two lists and return one in the correct order."
  (if (and (not (empty? L)) (not (empty? R)))
    (if (<= l r)
      (mergs-lists lrest R (conj new-list l))
      (mergs-lists L rrest (conj new-list r)))
    (concat new-list R L)))

(defn mergesort [unsorted-list]
  "Mergesort function will take in an unsorted list and should return a sorted list."
  (if (< (count unsorted-list) 2)
      unsorted-list
      (let [new-list    (split-at (int (/ (count unsorted-list) 2)) unsorted-list)]
        (mergs-lists (mergesort (get new-list 0)) (mergesort (get new-list 1)) []))))

(print (= (mergesort (list 9,8,7,6,5,4,3,2,1,9,8,7,-6,-9,9,-1)) (sort '(9,8,7,6,5,4,3,2,1,9,8,7,-6,-9,9,-1))))
(print (= (mergesort (list 1,1,1,1,1,1,1,1,1,1)) (sort '(1,1,1,1,1,1,1,1,1,1))))
(print (= (mergesort (list 1 2 3)) (sort '(1 2 3))))
