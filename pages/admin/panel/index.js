import AdminPanelLayout from "../../../layouts/AdminPanelLayout";
import {Dropdown, Table} from "antd";
import {useEffect, useState} from "react";
import {formatRuDate} from "../../../core/utils";
import Link from "next/link";
import {SettingOutlined} from "@ant-design/icons";


function AdminPanel() {
    const [dataSource, setDataSource] = useState([])
    console.log(dataSource)
    useEffect(() => {
        fetch('http://localhost:4444/posts')
            .then(res => res.json())
            .then(data => setDataSource(data.docs.map(p => ({...p, createdAt: formatRuDate(p.createdAt)}))))
    }, [])

    const items = [
        {
            key: '1',
            label: (
                <Link href={'/admin/panel/edit-post/1'}>
                    Изменить статью
                </Link>
            ),
        },
        {
            key: '2',
            danger: true,
            label: 'Удалить',
        },
    ]

    const columns = [
        {
            title: 'Заголовок',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Описание',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Категория',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Дата создания',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'Лайки',
            dataIndex: 'likes',
            key: 'likes',
            sorter: (a, b) => a.likes - b.likes,
        },
        {
            title: 'Кол-во просмотров',
            dataIndex: 'viewsCount',
            key: 'viewsCount',
            sorter: (a, b) => a.viewsCount - b.viewsCount,
        },
        {
            title: 'Действия',
            key: 'action',
            render: () => (
                <Dropdown menu={{ items }}>
                    <SettingOutlined style={{fontSize: '20px'}}/>
                </Dropdown>
            ),
        },
    ];
    return (
        <AdminPanelLayout>
            <h1>Главная</h1>
            <Table dataSource={dataSource}
                   columns={columns}
                   bordered
                   rowKey="_id"
            />
        </AdminPanelLayout>
    )
}

export default AdminPanel;