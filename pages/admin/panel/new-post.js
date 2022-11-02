import AdminPanelLayout from "../../../layouts/AdminPanelLayout";
import {useForm} from 'react-hook-form';
import styles from "../../../styles/admin-new-post.module.scss";
import Image from 'next/image'
import plusImg from '../../../public/plus.png'
import Editor from "../../../components/Editor";
import {useEffect, useState} from "react";
import axios from "axios";


function NewPost() {
    const [postBody, setPostBody] = useState('')
    const [previewTitleImg, setPreviewTitleImg] = useState(null)
    const [titleImg, setTitleImg] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            description:'',
            titleImg:'',
            post:''
        }
    });

    // const imgUpload = (event) => {
    //     console.log(event)
    //     const Data = new FormData()
    //     Data.append('image', event.target.files)
    //     console.log(Data.image)
    // }

    const onSubmit = (data) => {
        console.log({...data, post: postBody})
    }

    const imgUpload = (event) => {

        const Data = new FormData()
        Data.append('image', event.target.files[0])

        axios.post(
            'http://localhost:4444/uploads',
            Data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response) => {
            setTitleImg(response.data.fullUrl)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <AdminPanelLayout>
            <h1>Новая статья</h1>

            <div className={styles.addImg}>
                <input
                    type="file"
                    accept="image/*"
                    // name={'titleImg'}
                    // id={'titleImg'}
                    onChange={(event)=> imgUpload(event)}
                />
                <div className={styles.addImg__plus}>
                    <Image src={plusImg} alt={'plus'}/>
                </div>
                {
                    titleImg?
                        <>
                            <div className={styles.addImg__preview}>
                                <Image src={titleImg} alt={123} width={500} height={500}/>
                            </div>
                            <div onClick={()=> setTitleImg(null)} className={styles.addImg__plus + ' ' + styles.addImg__plus_del}>
                                <Image src={plusImg} alt={'plus'}/>
                            </div>
                        </>

                        :''
                }
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                {/*<Image src={tst} alt={123}/>*/}

                <div className={styles.addImg}>
                    <input
                        type="file"
                        accept="image/*"
                        // name={'titleImg'}
                        // id={'titleImg'}
                        onChange={(event)=> imgUpload(event)}
                    />
                    <div className={styles.addImg__plus}>
                        <Image src={plusImg} alt={'plus'}/>
                    </div>
                    <div className={styles.addImg__preview}>
                        {/*<Image src={previewTitleImg} alt={123} width={500} height={500}/>*/}
                    </div>
                </div>

                <div className={styles.newPostForm__controller}>
                    <label className={styles.newPostForm__label}
                           htmlFor={'title'}>
                        Заголовок статьи
                    </label>
                    <textarea
                        className={styles.newPostForm__textArea}
                        placeholder={'Заголовок статьи'}
                        name={'title'}
                        id={'title'}
                        {...register("title",
                        {required: true, minLength: 5, maxLength: 80})}
                    />
                </div>

                <div className={styles.newPostForm__controller}>
                    <label className={styles.newPostForm__label}
                           htmlFor={'description'}>
                        Описание
                    </label>
                    <textarea
                        className={styles.newPostForm__textArea}
                        style={{minHeight:'150px'}}
                        placeholder={'Описание статьи'}
                        name={'description'}
                        id={'description'}
                        {...register("description",
                            {required: true, minLength: 5, maxLength: 80})}
                    />
                </div>

                <div className={styles.newPostForm__editorWrp}>
                    <Editor onChange={(data)=> setPostBody(data)}/>
                </div>


                <input type={'submit'} value={'Опубликовать'}/>
            </form>
        </AdminPanelLayout>
    )
}

export default NewPost;