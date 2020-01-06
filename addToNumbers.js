/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let link1 = l1
  let link2 = l2
  let link1Arr = []
  let link2Arr = []

  while (link1.val) {
      link1Arr.push(link1.val)
      if (link1.next) {
          link1 = link1.next
      } else {
          return
      }
  }

  let link1Number = Number(link1Arr.join(''))

  while (link2.val) {
      link2Arr.push(link2.val)
      if (link2.next) {
          link2 = link2.next
      } else {
          return
      }
  }
  let link2Number = Number(link1Arr.join(''))
  let answer = link1Number + link2Number
  console.log(answer)
};
