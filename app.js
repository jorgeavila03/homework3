const org1_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        { name: 'accounting receivable', children: [] },
      ],
    },
    {
      name: 'finance',
      children: [],
    },
  ]
  
  const org2_depts = [
    {
      name: 'accounting',
      children: [
        { name: 'accounting payable', children: [] },
        {
          name: 'accounting receivable',
          children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
        },
      ],
    },
    {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
    },
  ]
  
  const start_tag = '<ol>'
  const end_tag = '</ol>'
  const start_li = '<li>'
  const end_li = '</li>'
  
  var output = start_tag
  //function printDep(org1_depts) {
      for (const dept of org1_depts) {
      output += start_li + dept.name + end_li
      //}
  //for (const dept1 of org1_depts.children) {
  // output += start_li + dept1.children.name + end_li
  //}
}
   // output += start_li + children.name + end_li


  output += end_tag
  
  const outputDiv = document.getElementById('output')
  outputDiv.innerHTML = output



var output2 = start_tag
for (const dept of org2_depts) {
  output2 += start_li + dept.name + end_li
}
output2 += end_tag

const output2Div = document.getElementById('output2')
output2Div.innerHTML = output2
