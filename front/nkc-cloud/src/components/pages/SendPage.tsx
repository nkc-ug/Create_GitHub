import { TextField, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { useContext } from "react";
import { FileAboutCommentContext, FileAboutFileNameContext, FileAboutKeyContext, FileAboutTitleContext, FileAboutUrlContext } from "../../App";
import MainLayout from "../template/MainLayout"

const SendPage:React.FC = () => {
    const {state:FileAboutTitle, setState:setFileAboutTitle} = useContext(FileAboutTitleContext);
    const {state:FileAboutComment, setState:setFileAboutComment} = useContext(FileAboutCommentContext);
    const {state:FileAboutFileName, setState:setFileAboutFileName} = useContext(FileAboutFileNameContext);
    const {state:FileAboutKey, setState:setFileAboutKey} = useContext(FileAboutKeyContext);
    const {state:FileAboutUrl, setState:setFileAboutUrl} = useContext(FileAboutUrlContext);


    return(
        <MainLayout>
            <Stack justifyContent='center' direction='row' sx={{ mt:5 }}>
                <Box sx={{ mx:3, p:3, borderRadius:2,  bgcolor:'secondary.main', boxShadow:1 }}>
                    <Typography textAlign='center' variant='h6' noWrap={true} sx={{ mb:3 }}>
                        ファイルの送信が完了しました！
                    </Typography>
                    <Stack direction='column' spacing={4} justifyContent='center' alignContent='center' sx={{ m:2 }}>
                        <Typography variant="body1">タイトル　：　{FileAboutTitle === "" ? "タイトル未設定" : FileAboutTitle }</Typography>
                        <Typography variant="body1">コメント　：　{FileAboutComment === "" ? "コメント未設定" : FileAboutComment }</Typography>
                        <Typography variant="body1">ファイル名：　{FileAboutFileName === "" ? "" : FileAboutFileName }</Typography>
                        <Typography variant="body1">パスワード：　{FileAboutKey === "0000" ? "パスワードが設定されていません" : FileAboutKey }</Typography>
                        <TextField value={FileAboutUrl} variant="standard"/>
                    </Stack>
                </Box>
            </Stack>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </MainLayout>
    )
}

export default SendPage