/**
 * @param {string[]} cpdomains
 * @return {string[]}
 *
 * https://leetcode.com/problems/subdomain-visit-count/
 */
 var subdomainVisits = function(cpdomains) {
  var resultMap = {}
  for(var i=0; i<cpdomains.length; i++) {
      var parts = cpdomains[i].split(' ')
      var count = Number(parts[0])
      var domain = parts[1]
      var domainParts = parts[1].split('.')
      var combinedDomain = ''
      for(var j=domainParts.length-1; j>=0;j--) {
          combinedDomain = combinedDomain.length != 0 ? domainParts[j] + '.' + combinedDomain : domainParts[j]
          resultMap[combinedDomain] = resultMap[combinedDomain] ? resultMap[combinedDomain] + count : count
      }
  }
  // console.log(resultMap)
  // var result = Object.keys(resultMap).forEach((key) => (`{$resultMap[key]} {$key}`))
  result = []
  Object.keys(resultMap).forEach(function(key) {
    console.log(key)
    result.push(`${resultMap[key]} ${key}`)
  })
  return result
};

subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])
