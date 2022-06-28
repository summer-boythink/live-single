import { Card,Input, Space } from 'antd';
import React from 'react';
import "./PlaySelf.css"

function PlaySelf(){
    return (
        <div className='choice'>
            <Card style={{width:300}}>
                <Space direction="vertical">
                    <Input placeholder='请输入房间名' addonBefore="房间名" />
                    <Input.Password placeholder="请输入密码" addonBefore="密码" />
               </Space>
            </Card>
        </div>
    )
}

export default PlaySelf