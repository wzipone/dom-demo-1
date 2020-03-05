window.dom = {
    //创建节点
    create(htmlStr) {
        //tempalte可以容纳任何标签
        let container = document.createElement('template')
        container.innerHTML = htmlStr.trim()
        return container.content.firstChild
    },
    //新增弟弟节点
    after(node, aterNode) {
        node.parentNode.insertBefore(aterNode, node.nextSilbing)
    },
    //新增哥哥节点
    before(node, beforeNode) {
        node.parentNode.insertBefore(beforeNode, node)
    },
    //新增儿子节点
    append(parent, child) {
        parent.appendChild(child)
    },
    //新增父节点
    wrap(node, wrapNode) {
        dom.before(node, wrapNode)
        dom.append(wrapNode, node)
    },
    //删除节点
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    //清空后代
    empty(node) {
        // let {childNodes}= node
        // console.log(children);//当操作innerHTML为空字符串时，node.childNodes和children的引用也会清空
        const arr = []
        let {childNodes} = node
        for (let i = 0; i < childNodes.length; i++) {
            arr.push(childNodes[i])
        }
        node.innerHTML = ''
        return arr
        // let x = node.firstChild
        // while(x){
        //     arr.push(dom.remove(node.firstChild))
        //     x = node.firstChild
        // }
    },
    //读写属性
    attr(node, name, value) {
        if (arguments.length === 2) { //认为是读属性
            return node.getAttribute(name)
        } else if (arguments.length === 3) { //认为是写属性
            node.setAttribute(name, value)
        }
    },
    //读写文本内容
    text(node, text) {
        if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        } else if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = text
            } else {
                node.textContent = text
            }
        }
    },
    //读写html内容
    html(node, htmlStr) {
        if (arguments.length === 1) {
            return node.innerHTML
        } else if (arguments.length === 2) {
            node.innerHTML = htmlStr
        }
    },
    //修改node.style
    style(node, name, value) {
        if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object){
                const object = name
                // let cssText = ''
                for(let key in object){
                    node.style[key] = object[key] //styel[]方括号内写成css形式或者驼峰形式都可以识别
                    // cssText += `${key}:${object[key]};`
                }
                // node.style.cssText += cssText 
            }
        } else if (arguments.length === 3) {
            node.style[name] = value
        }
    },
    //添加clas
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className){
            return node.classList.contains(className)
        }
    },
    //添加事件监听
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    //查找元素
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    //获取父元素
    parent(node) {
        return node.parentNode
    },
    //获取子元素
    children(node) {
        return node.children
    },
    //获取兄弟姐妹元素
    siblings(node) {
        return Array.from(node.parentNode.children).filter((n) => n !== node)
    },
    //获取弟弟
    next(node) {
        let next = node.nextSibling
        while (next && next.nodeType === 3) {
            next = next.nextSibling
        }
        return next
    },
    //获取哥哥
    previous(node) {
        let pre = node.previousSibling
        while (pre && pre.nodeType === 3) {
            pre = pre.previousSibling
        }
        return pre
    },
    //遍历所有节点
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn.call(null, nodes[i])
        }
    },
    //获取排行老几
    index(node) {
        let i = 0
        while (node) {
            i++
            node = dom.previous(node)
        }
        return i
    }
}