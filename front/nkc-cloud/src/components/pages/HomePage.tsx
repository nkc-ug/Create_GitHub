import { Box, Button, CircularProgress, Container, Modal, Stack, TextField, Typography } from "@mui/material";
import MainLayout from "../template/MainLayout";
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import homeRightPic from "../../img/homeRightPic.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../atom/SecondaryButton";
import PrimaryButton from "../atom/PrimaryButton";
import axios from "../../util/axiosUtil";
import { FileAboutCommentContext, FileAboutFileNameContext, FileAboutKeyContext, FileAboutLimitContext, FileAboutTitleContext, FileAboutUrlContext } from "../../App";

// type FileAbout = {
//     title: string,
//     comment: string,
//     pasward: string
// }

const HomePage:React.FC = () =>{
    const navigation = useNavigate();
    const [AddModalOpen, setAddModalOpen] = useState<boolean>(false);
    const [SendModalOpen, setSendModalOpen] = useState<boolean>(false);
    const [AddFileList, setAddFileList] = useState<File | null>(null);

    // const [FileAbout, setFileAbout] = useState<FileAbout>({} as FileAbout);
    const {state:FileAboutTitle, setState:setFileAboutTitle} = useContext(FileAboutTitleContext);
    const {state:FileAboutComment, setState:setFileAboutComment} = useContext(FileAboutCommentContext);
    const {setState:setFileAboutFileName} = useContext(FileAboutFileNameContext);
    const {setState:setFileAboutLimit} = useContext(FileAboutLimitContext);
    const {state:FileAboutKey, setState:setFileAboutKey} = useContext(FileAboutKeyContext);
    const {setState:setFileAboutUrl} = useContext(FileAboutUrlContext);

    const addFileComplete = () => {
        setAddModalOpen(!AddModalOpen);
        setSendModalOpen(!SendModalOpen);
        setAddFileList(null);
        axios.post(`api/v1/posts/${FileAboutTitle}/${FileAboutComment}/${FileAboutKey}/${AddFileList}`)
        .then((res) => {
            setSendModalOpen(!setSendModalOpen);
            setFileAboutFileName(res.data.fail_name);
            setFileAboutLimit(res.data.date);
            setFileAboutUrl(res.data.key);
            navigation("/SendPage");
        })
    }

    const addFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        const tempFileList = e.target.files
        if (tempFileList && tempFileList[0]){
            setAddFileList(tempFileList[0])
            setFileAboutTitle(tempFileList[0].name);
            
        }
    }

    const titleText = <>
        今すぐに、<br/>
        ファイルを共有<br/>
        ただそれだけ。
    </>

    const subTitleText = <>
        ファイルの容量制限や、煩雑な権限管理に縛られず<br/>
        生成したURLをクリックして即ファイルをダウンロード。
    </>

    return(
        <>
            <MainLayout >
                {/* forPC */}
                <Stack direction='row' sx={{ mt:13, display:{ xs:'none', md:'flex' }}}>
                    <Box sx={{ ml:10 }}>
                        <Typography variant="h2" noWrap={true} sx={{ color:'secondary.main', lineHeight:'1.5'}}>
                            {titleText}
                        </Typography>
                        <Typography variant="subtitle2" noWrap={true} sx={{ color:'secondary.dark', lineHeight:'2', mt:2 }}>
                            {subTitleText}
                        </Typography>
                        <Box sx={{ mt:3 }}>
                            <SecondaryButton state={AddModalOpen} stateAction={setAddModalOpen} icon={<DriveFileMoveIcon/>} label="ファイルを登録"/>
                        </Box>
                    </Box>
                    <Box sx={{ ml:8, p:3, boxShadow:2, borderRadius:5, bgcolor:'secondary.main' }}>
                        <img src={homeRightPic} alt="イメージ画像"/>
                    </Box>
                </Stack>
                <Box sx={{ height:10, display:{ xs:'none', md:'flex' }}}/>
                {/* forPhone */}
                <Stack direction='column' sx={{ display:{ sx:'flex', md:'none' }}}>
                    <Box sx={{ mx:4, my:2 }}>
                        <Box sx={{ mt:3, mb:2 }}>
                            <Typography variant='h4' sx={{ color:'secondary.main', lineHeight:'1.5' }}>
                                {titleText}
                            </Typography>
                        </Box>
                        <Typography variant="subtitle2" sx={{ color:'secondary.dark', lineHeight:'2' }}>
                            {subTitleText}
                        </Typography>
                        <Stack justifyContent='center' sx={{ mx:8, mt:3 }}>
                            <SecondaryButton state={AddModalOpen} stateAction={setAddModalOpen} icon={<DriveFileMoveIcon/>} label="ファイルを登録"/>
                        </Stack>
                        <Box sx={{ mt:5, p:3, boxShadow:2, borderRadius:5, bgcolor:'secondary.main' }}>
                            <img src={homeRightPic} alt="イメージ画像" width="100%"/>
                        </Box>
                    </Box>
                </Stack>
                {/*ここの br　は後で消す */}
                <div><br/><br/><br/><br/><br/><br/></div>
            </MainLayout>
            
            {/* AddModal */}
            <Modal open={AddModalOpen} onClose={() => {setAddModalOpen(!AddModalOpen)}}>
                <Container
                    maxWidth='xs'
                    sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'secondary.main',
                        border: '0.5px solid',
                        borderRadius: 5,
                        boxShadow: 10,
                        p: 2,
                        py: 4
                    }}
                >
                    <Stack sx={{ mx:8 }}>
                        <Box sx={{ mb:4 }}>
                            <Typography textAlign='center' noWrap={true} sx={{ mb:0.5 }}>
                                選択済みのファイル
                            </Typography>
                            <Box border='solid 0.5px' height='80px' borderRadius={2}>
                                <Stack justifyContent="space-between" spacing={2} sx={{ my:2 }}>
                                    <Typography textAlign='center'>
                                        {AddFileList?.name}
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                        <Stack justifyContent='space-between' direction="row" sx={{ pb:3, mx:3 }}>
                            <label htmlFor='uploadButton'>
                                <Stack justifyContent='center'>
                                    <Button variant="outlined" component="span" onClick={() => {setAddFileList(null)}}>
                                        <Typography variant='body1' noWrap={true}>
                                            追加する
                                        </Typography>
                                    </Button>
                                </Stack>
                                <input
                                    id='uploadButton'
                                    multiple
                                    type="file"
                                    style={{ display:'none' }}
                                    onChange={addFile}
                                />
                            </label>
                            <Button variant="outlined" component="span">
                                <Typography variant='body1' noWrap={true} onClick={() => {setAddFileList(null)}}>
                                    削除する
                                </Typography>
                            </Button>
                        </Stack>
                        <Stack direction='column'>
                            <TextField value={FileAboutTitle}  onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setFileAboutTitle(e.target.value)}} id="title" label='タイトル' variant="outlined" sx={{ mb:2 }}/>
                            <TextField value={FileAboutComment}  onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setFileAboutComment(e.target.value)}} id="comment" label='コメント' variant="outlined" sx={{ mb:2 }}/>
                            <TextField value={FileAboutKey}  onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setFileAboutKey(e.target.value)}} id="pasward" label='パスワード' variant="outlined" sx={{ mb:1 }}/>
                            <Typography noWrap={true} textAlign='center' variant="caption" sx={{ mb:2 }}>
                                パスワード・コメントが必要ない場合は<br/>未入力のまま送信できます。
                            </Typography>
                            <PrimaryButton label="決定" stateAction={addFileComplete}/>
                        </Stack>
                    </Stack>
                </Container>
            </Modal>

            {/* SendModal */}
            <Modal open={SendModalOpen} onClose={() => {setSendModalOpen(!SendModalOpen)}}>
                <Container
                    maxWidth='xs'
                    sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'secondary.main',
                        border: '0.5px solid',
                        borderRadius: 5,
                        boxShadow: 10,
                        p: 2,
                        py: 4
                    }}
                >
                    <Stack sx={{ mx:8 }}>
                        <Typography textAlign='center' noWrap={true} sx={{ mb:0.5 }}>
                                ファイルをアップロードしています
                            </Typography>
                        <Stack justifyContent='center' direction="row">
                            <CircularProgress sx={{ m:3 }}/>
                        </Stack>
                    </Stack>
                </Container>
            </Modal>
        </>
    )
}

export default HomePage;