import React, {useEffect, useState} from 'react'
import './index.scss'
import '../../renderer/markdown.scss'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import * as commonmark from 'commonmark/dist/commonmark';
import MarkdownIt from "markdown-it";

export {Page}

enum modes {
    design,
    view,
    both

}

const d = `# A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

# new head line

\`\`\`js
console.log('windows')
\`\`\`
`

function Page() {
    const ddd = new MarkdownIt();

    // var reader = new commonmark.Parser();
    // var writer = new commonmark.HtmlRenderer();

    const [editMode, setEditMode] = useState(modes.view)
    const [markdown, setMarkdown] = useState(d)
    const notes: { header: string, date: string, details: string }[] = [
        {
            header: 'Note 1',
            date: '10/10/2020',
            details: '# welcome name' +
                '```js' +
                'console.log' +
                '```'
        },
        {
            header: 'Note 1',
            date: '10/10/2020',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, architecto consectetur dolore esse, excepturi iste iure maiores molestias nam nisi numquam odio porro quaerat quas rerum sunt suscipit tempore?'
        },
        {
            header: 'Note 1',
            date: '10/10/2020',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, architecto consectetur dolore esse, excepturi iste iure maiores molestias nam nisi numquam odio porro quaerat quas rerum sunt suscipit tempore?'
        },
        {
            header: 'Note 1',
            date: '10/10/2020',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, architecto consectetur dolore esse, excepturi iste iure maiores molestias nam nisi numquam odio porro quaerat quas rerum sunt suscipit tempore?'
        },
        {
            header: 'Note 1',
            date: '10/10/2020',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, architecto consectetur dolore esse, excepturi iste iure maiores molestias nam nisi numquam odio porro quaerat quas rerum sunt suscipit tempore?'
        },
        {
            header: 'Note 1',
            date: '10/10/2020',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, architecto consectetur dolore esse, excepturi iste iure maiores molestias nam nisi numquam odio porro quaerat quas rerum sunt suscipit tempore?'
        },
        {
            header: 'Note 1',
            date: '10/10/2020',
            details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias, architecto consectetur dolore esse, excepturi iste iure maiores molestias nam nisi numquam odio porro quaerat quas rerum sunt suscipit tempore?'
        },
    ]

    useEffect(() => {
        window.document.querySelectorAll('.view> *').forEach(a => a.setAttribute('contenteditable', 'true'))


// debugger;
    })
    const draw = () => {
        ddd.render(d);
        console.log(markdown);
        debugger;
        return <div>hi</div>
    }
    // const draw = (md) => {
    //
    //     md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
    //     md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
    //     md = md.replace(/^\*(.+)/gm, '<li>$1</li>');
    //
    //     //ol
    //     md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
    //     md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
    //     md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');
    //
    //     //blockquote
    //     md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');
    //
    //     //h
    //     md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
    //     md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
    //     md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
    //     md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
    //     md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
    //     md = md.replace(/[\#]{1}(.+)/g, '<h1 contenteditable="true">$1</h1>');
    //
    //     //alt h
    //     md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
    //     md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');
    //
    //     //images
    //     md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');
    //
    //     //links
    //     md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');
    //
    //     //font styles
    //     md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
    //     md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
    //     md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');
    //
    //     //pre
    //     md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
    //     md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');
    //
    //     //code
    //     md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');
    //
    //     //p
    //     md = md.replace(/^\s*(\n)?(.+)/gm, function (m) {
    //         return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
    //     });
    //
    //     //strip p from pre
    //     md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');
    //
    //     return md;
    // }

    // const draw2 = () => {
    //     return markdown.map(a => {
    //         const d = Object.values(a)[0];
    //         switch (d.element) {
    //             case 'h1':
    //                 return <h1 key={Math.random()}>{d.value}</h1>
    //             default:
    //                 return <div>no implemented</div>
    //         }
    //
    //     })
    // }
    const notesRender = (n, i) => {
        if (i === 0) {
            return <div className="note-list-item active">
                <div className='date text-xs'>
                    10m
                </div>
                <div className='details'>
                    <div className='title'>Gerocery List</div>
                    <div className='detail text-sm'>
                        I'm Miranda from Turo's Executive Support Team. It's recently been brought to my
                        attention a gas reimbursement escalation for Reservation 17835917. Thank you for
                        being a
                        part of Turo and using our Reimbursement tool.
                    </div>
                </div>
            </div>
        } else {
            return <div className="note-list-item">
                <div className='date text-xs'>
                    12hr
                </div>
                <div className='details'>
                    <div className='title'>Note 1</div>
                    <div className='detail text-sm'>
                        I'm Miranda from Turo's Executive Support Team. It's recently been brought to my
                        attention a gas reimbursement escalation for Reservation 17835917. Thank you for
                        being a
                        part of Turo and using our Reimbursement tool.
                    </div>
                </div>
            </div>
        }

    }

    return (<>
            <div className="header"></div>
            <div className="content">
                <div className="side-bar">
                    <div className="note-list">
                        {notes.map(notesRender)}
                    </div>
                </div>

                <div className="note ">
                    <div className="flex items-center justify-end py-5">
                        <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                            <a
                                href="#"
                                aria-current="page"
                                onClick={() => setEditMode(modes.view)}
                                className=" rounded-l px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase transition duration-150 ease-in-out">
                                View
                            </a>
                            <a
                                href="#"
                                onClick={() => setEditMode(modes.design)}
                                className=" px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase transition duration-150 ease-in-out"
                            >
                                Design
                            </a>
                            <a
                                href="#"
                                onClick={() => setEditMode(modes.both)}
                                className="rounded-l px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase transition duration-150 ease-in-out">
                                Both
                            </a>
                        </div>
                    </div>
                    <div className="mark-down">
                        {(editMode === modes.view || editMode === modes.both) &&
                            <div className="view">
                                {draw()}
                                {/*<div dangerouslySetInnerHTML={{__html: parseMd(markdown)}}*/}
                                {/*     onChange={a => console.log(a)}*/}
                                {/*     onKeyDown={e => console.log(e.target)}*/}
                                {/*/>*/}


                                {/*<ReactMarkdown children={markdown}*/}

                                {/*               remarkPlugins={[remarkGfm]}/>*/}
                            </div>}
                        {(editMode === modes.design || editMode === modes.both) &&
                            <div className="design">
                                <textarea value={markdown} onChange={e => setMarkdown(e.target.value)}/>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

// function parseType(reg, element, text) {
//     const res = []
//     const regex = new RegExp(reg)
//     var match = regex.exec(text);
//     while (match != null) {
//         // matched text: match[0]
//         // match start: match.index
//         // capturing group n: match[n]
//         // console.log(match[0])
//         res.push({[match.index]: {element, value: match[1]}})
//         match = regex.exec(text);
//     }
//
//     return res;
// }

// function parseMdr(md) {
//     const regexes = [{regex: /^\s*\n\*/gm, element: 'ul'},
//         {regex: /^(\*.+)\s*\n([^\*])/gm, element: '1'},
//         {regex: /^\*(.+)/gm, element: 'li'},
//         // //ol
//         {regex: /^\s*\n\d\./gm, element: 'ol'},
//         {regex: /^(\d\..+)\s*\n([^\d\.])/gm, element: '1'},
//         {regex: /^\d\.(.+)/gm, element: 'li'},
//         // //blockquote
//         {regex: /^\>(.+)/gm, element: 'blockquote'},
//         // //h
//         {regex: /[\#]{6}(.+)/g, element: 'h6'},
//         {regex: /[\#]{5}(.+)/g, element: 'h5'},
//         {regex: /[\#]{4}(.+)/g, element: 'h4'},
//         {regex: /[\#]{3}(.+)/g, element: 'h3'},
//         {regex: /[\#]{2}(.+)/g, element: 'h2'},
//         {regex: /[\#]{1}(.+)/g, element: 'h1'},
//         // //alt h
//         {regex: /^(.+)\n\=+/gm, element: 'h1'},
//         {regex: /^(.+)\n\-+/gm, element: 'h2'},
//         // //images
//         {regex: /\!\[([^\]]+)\]\(([^\)]+)\)/g, element: 'img'},
//         // //links
//         {regex: /[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, element: 'a'},
//         // //font styles
//         {regex: /[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, element: 'b'},
//         {regex: /[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, element: 'i'},
//         {regex: /[\~]{2}([^\~]+)[\~]{2}/g, element: 'del'},
//         // //pre
//         {regex: /^\s*\n\`\`\`(([^\s]+))?/gm, element: 'pre'},
//         {regex: /^\`\`\`\s*\n/gm, element: '/'},
//         // //code
//         {regex: /[\`]{1}([^\`]+)[\`]{1}/g, element: 'code'}]
//
//     const data = [];
//     regexes.map(reg => {
//         const res = parseType(reg.regex, reg.element, md)
//         data.push(...res)
//     })
//
//     return data.sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
// }

function parseMd(md) {
    //ul
    md = md.replace(/^\s*\n\*/gm, '<ul>\n*');
    md = md.replace(/^(\*.+)\s*\n([^\*])/gm, '$1\n</ul>\n\n$2');
    md = md.replace(/^\*(.+)/gm, '<li>$1</li>');

    //ol
    md = md.replace(/^\s*\n\d\./gm, '<ol>\n1.');
    md = md.replace(/^(\d\..+)\s*\n([^\d\.])/gm, '$1\n</ol>\n\n$2');
    md = md.replace(/^\d\.(.+)/gm, '<li>$1</li>');

    //blockquote
    md = md.replace(/^\>(.+)/gm, '<blockquote>$1</blockquote>');

    //h
    md = md.replace(/[\#]{6}(.+)/g, '<h6>$1</h6>');
    md = md.replace(/[\#]{5}(.+)/g, '<h5>$1</h5>');
    md = md.replace(/[\#]{4}(.+)/g, '<h4>$1</h4>');
    md = md.replace(/[\#]{3}(.+)/g, '<h3>$1</h3>');
    md = md.replace(/[\#]{2}(.+)/g, '<h2>$1</h2>');
    md = md.replace(/[\#]{1}(.+)/g, '<h1 contenteditable="true">$1</h1>');

    //alt h
    md = md.replace(/^(.+)\n\=+/gm, '<h1>$1</h1>');
    md = md.replace(/^(.+)\n\-+/gm, '<h2>$1</h2>');

    //images
    md = md.replace(/\!\[([^\]]+)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" />');

    //links
    md = md.replace(/[\[]{1}([^\]]+)[\]]{1}[\(]{1}([^\)\"]+)(\"(.+)\")?[\)]{1}/g, '<a href="$2" title="$4">$1</a>');

    //font styles
    md = md.replace(/[\*\_]{2}([^\*\_]+)[\*\_]{2}/g, '<b>$1</b>');
    md = md.replace(/[\*\_]{1}([^\*\_]+)[\*\_]{1}/g, '<i>$1</i>');
    md = md.replace(/[\~]{2}([^\~]+)[\~]{2}/g, '<del>$1</del>');

    //pre
    md = md.replace(/^\s*\n\`\`\`(([^\s]+))?/gm, '<pre class="$2">');
    md = md.replace(/^\`\`\`\s*\n/gm, '</pre>\n\n');

    //code
    md = md.replace(/[\`]{1}([^\`]+)[\`]{1}/g, '<code>$1</code>');

    //p
    md = md.replace(/^\s*(\n)?(.+)/gm, function (m) {
        return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>' + m + '</p>';
    });

    //strip p from pre
    md = md.replace(/(\<pre.+\>)\s*\n\<p\>(.+)\<\/p\>/gm, '$1$2');

    return md;

}

// var rawMode = true;
// mdEl = document.getElementById('markdown'),
//     outputEl = document.getElementById('output-html'),
//     parse = function(){
//         outputEl[rawMode ? "innerText" : "innerHTML"] = parseMd(mdEl.innerText);
//     };
//
// parse();
// mdEl.addEventListener('keyup', parse, false);
//
// //Raw mode trigger btn
// (function(){
//
//     var trigger = document.getElementById('raw-switch'),
//         status = trigger.getElementsByTagName('span')[0],
//         updateStatus = function(){
//             status.innerText = rawMode ? 'On' : 'Off';
//         };
//
//     updateStatus();
//     trigger.addEventListener('click', function(e){
//         e.preventDefault();
//         rawMode = rawMode ? false : true;
//         updateStatus();
//         parse();
//     }, false);
//
// }());
