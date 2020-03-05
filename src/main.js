let newNode = dom.create('  <div>create</div>')
let afterNode = dom.create('  <div>afterNode</div>')
let beforeNode = dom.create('  <div>beforeNode</div>')
let son = dom.create('  <div>son</div>')
let parent = dom.create('<div></div>')

add.appendChild(newNode)
dom.after(newNode,afterNode)
dom.before(newNode,beforeNode)
dom.append(add,son)
dom.wrap(son,parent)

console.log(dom.remove(d2))
console.log(dom.empty(deleteWrap));

dom.attr(m1,'title','modify')
console.log(dom.attr(m1,'title'));

dom.text(m1,'我是新增的文本')
console.log(dom.text(m1))

dom.style(m2,{color:'red','background-color':'blue'})
// dom.style(m2,'color','blue')
console.log(dom.style(m2,'color'));

dom.class.add(m3,'blue')
dom.class.remove(m3,'blue')

fn=()=>{
    console.log('添加事件成功')
}
dom.on(m3,'click',fn)
dom.off(m3,'click',fn)

console.log(dom.siblings(q2))
console.log(dom.next(q2))

console.log('----------')
console.log(dom.previous(q2))

fn1=(node)=>{
    console.log(node.nodeType)
}
dom.each(dom.children(queryWrap),fn1)

console.log(dom.index(q2));








