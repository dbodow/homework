# A Queue is a FILO data structure
# It can #enqueue(el), #dequeue, and #show
class MyQueue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def show
    @queue
  end
end
