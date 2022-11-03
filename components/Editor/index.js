import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false
});

export default function Editor({ name, onChange, props, contTst }) {

    const options = {
        height: 750,
        // maxWidth: 900,
        "formats": [
            "p",
            "h2",
            "h3",
            "blockquote",
            "pre",
        ],
        "videoResizing": false,
        "videoFileInput": false,
        // toolbarWidth:'balloon',
        // mode:'inline',
        buttonList: [
            [
                'undo',
                'redo',
                'formatBlock',
                'bold',
                'underline',
                'italic',

                'blockquote',
                'strike',
                'fontColor',
                'hiliteColor',
                'removeFormat',

                'outdent',
                'indent',
                'align',
                // 'horizontalRule',
                'list',
                // 'table',
                'link',
                'image',

                "video",

                'showBlocks',
                'codeView',
                'preview'
            ]
        ],
    }

    return (
        <div>
            <SunEditor
                {...props}
                placeholder="Начните создавать статью)"
                appendContents={contTst}
                name={name}
                lang="ru"
                setDefaultStyle="font-family: Inter;"
                setOptions={options}
                onChange={onChange}
            />
        </div>
    );
}
