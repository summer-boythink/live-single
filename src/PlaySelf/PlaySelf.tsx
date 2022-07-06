import { Card,Input, Space,Button } from 'antd';
import { KeyOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import "./PlaySelf.css"

function PlaySelf(){
    const [roomName,setRoomName] = useState(1);

    function getSecret(){

    }

    return (
        <div className='choice'>
            <Card style={{width:300}}>
                <Space direction="vertical">
                    <Input placeholder='请输入房间名' addonBefore="房间名" value={"qww"}/>
                    {/* <Input.Password placeholder="请输入密码" addonBefore="密码" /> */}
                    <Button type="primary" icon={<KeyOutlined />}>
                       获取推流密钥
                    </Button>
               </Space>
            </Card>
        </div>
    )
}

export default PlaySelf