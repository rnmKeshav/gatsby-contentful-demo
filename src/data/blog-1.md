### **What**
- Remove call cta from doctor profile if prime video consult is enabled
  
### **Why**
- https://practo.atlassian.net/wiki/spaces/FAB/pages/2463301791/No+Call+Option+-+Prime+Consult
  
### **Testing Scope**
- List of testing cases to be covered for this PR

-  if schedule_consult is true and has_prime or has_prime_basic is not true --> remove call cta

- if neither has_prime has_prime_basic , schedule_consult is true --> enable call cta