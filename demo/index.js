import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss';
import './atom-one-dark.css'



import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\n//  * 绿色代表 当前语种\n//  * 预览状态\n//  */\n\nimport React, { Component } from 'react';\nimport AcInputLocale from '../../src/index.js';\nimport Button from 'bee-button';\nimport Form from 'bee-form';\n class Demo1 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"zh_CN\",     //当前语种\n            status:\"\",\n            required:true,\n            localeListAll: {\n              \"zh_CN\":{\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\" }\n              },\n              \"en_US\":{\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\" }\n              },\n              \"zh_TW\":{\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\",}\n              },\n              \"fr_FR\":{\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\" }\n              }\n              \n          },\n            localeList: {},\n            localeJson:{\n              \"zh_CN\":\"简体中文\",\n              \"en_US\":\"英文\",\n              \"zh_TW\":\"繁体中文\",\n              \"fr_FR\":\"法语\"\n            }\n        }\n        this.save = this.save.bind(this)\n    }\n\n    componentDidMount() {\n      this.setState({\n        localeList:\n          {\n            \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n            \"en_US\":{\"label\":\"英文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n            \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n            \"fr_FR\":{\"label\":\"法语\",\"value\":\"\",\"errorMsg\":\"不能为空\"}\n        }\n        \n      }\n      );\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n    }\n\n    onOk=(localeList)=>{\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key,\n          localeList:this.state.localeListAll[key]\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    save(e) {\n      e.preventDefault();\n      this.props.form.validateFields((err, values) => {\n          if (err) {\n              console.log('校验失败', values);\n          } else {\n              console.log('提交成功', values)\n\n          }\n      });\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;\n        // let modalLocale = {\n        //   'fr_FR':{\n        //     'title':'Multilingual établir12',\n        //     'okName':'conservation12',\n        //     'cancelName':'supprimer12',\n        //     'localeFlag':'1fasf'\n        //   }\n        // }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n                  <br/>\n                </div>\n                名称：\n                <AcInputLocale\n                  inputId={'username'}\n                  form={this.props.form}\n                  localeList={localeList}\n                  sysLocale={sysLocale}\n                  onOk={this.onOk}\n                  locale={locale}\n                  status={status}\n                  onChange={this.onChange}\n                  required={required}\n                  \n                >\n                </AcInputLocale>\n                <Button onClick={this.save}>保存</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
