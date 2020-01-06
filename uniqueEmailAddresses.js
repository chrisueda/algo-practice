/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var uniqueEmails = new Set()
  for (let i = 0; i < emails.length; i++) {
    var parts = emails[i].split("@")
    // console.log(parts)
    var local = parts[0]
    if (local.indexOf("+") > 0) {
      local = local.split("+")[0]
    }
    while (local.indexOf(".") > 0) {
      local = local.replace(".", "")
    }
    uniqueEmails.add(local + "@" + parts[1])
  }
  console.log(uniqueEmails.size)
  return uniqueEmails.size
}

numUniqueEmails([
  "test.email+alex@leetcode.com",
  "test.email.leet+alex@code.com"
])
