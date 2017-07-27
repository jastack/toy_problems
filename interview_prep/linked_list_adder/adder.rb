class Node
  attr_accessor :digit, :next_node

  def initialize(digit)
    @digit = digit
    @next_node = nil
  end

end

def linked_list_adder(head1, head2)
  result = Node.new(0)
  current = result
  # As we moved down the input lists we'll also move down the result list,
  # keeping track of the current node we're working on.

  until head1 == nil && head2 == nil
    digit = nil
    next_node = Node.new(0)

#  These conditionals determine which digit to add to the current result Node.
#  If one of the lists has ended and is nil, just add the one that isn't
#  nil. If the digits add to greater than 9, add the digits mod 10 and add
#  a 1 to the next node. Otherwise, add the two digits.

    if head1 == nil || head2 == nil
      digit = head1 ? head1.digit : head2.digit
    elsif head1.digit + head2.digit > 9
      digit = (head1.digit + head2.digit) % 10
      next_node.digit = 1
    else
      digit = head1.digit + head2.digit
    end

#  This is were we update the digit of the current result Node. We add the
#  digits as determined above to the current digit (default at 0, but if carrying
#  a 1 from a previous operation it may be 1)

    new_digit = current.digit + digit
    current.digit = new_digit
    current.next_node = next_node
    current = next_node

# This part could definitely be cleaner, just making sure we don't call
# .next_node on nil.

    if head1 == nil
      head1 = nil
    else
      head1 = head1.next_node
    end

    if head2 == nil
      head2 = nil
    else
      head2 = head2.next_node
    end

  end
  result
end

def num_reader(head)
  result = []
  until head == nil
    result << head.digit
    head = head.next_node
  end
  result.reverse.join('').to_i

end

#Build 105 as linked list
head1 = Node.new(5)
head1_tens = Node.new(0)
head1_hundreds = Node.new(1)
head1.next_node = head1_tens
head1_tens.next_node = head1_hundreds

#Build 57 as linked list
head2 = Node.new(7)
head2_tens = Node.new(5)
head2.next_node = head2_tens

p num_reader(head1)
p num_reader(head2)
add = linked_list_adder(head1, head2)
p num_reader(add)
