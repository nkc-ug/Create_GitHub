import { Box, Button, Container, Modal, Stack, Typography } from "@mui/material";
import MainLayout from "../template/MainLayout";
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import homeRightPic from "../../img/homeRightPic.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../atom/SecondaryButton";
import PrimaryButton from "../atom/PrimaryButton";

const HomePage:React.FC = () =>{
    const navigation = useNavigate();
    const [ModalOpen, setModalOpen] = useState<boolean>(false);

    const addFile = () => {
        setModalOpen(!ModalOpen);
        navigation("/");
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
                            <SecondaryButton state={ModalOpen} stateAction={setModalOpen} icon={<DriveFileMoveIcon/>} label="ファイルを登録"/>
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
                            <SecondaryButton state={ModalOpen} stateAction={setModalOpen} icon={<DriveFileMoveIcon/>} label="ファイルを登録"/>
                        </Stack>
                        <Box sx={{ mt:5, p:3, boxShadow:2, borderRadius:5, bgcolor:'secondary.main' }}>
                            <img src={homeRightPic} alt="イメージ画像" width="100%"/>
                        </Box>
                    </Box>
                </Stack>
                {/*ここの br　は後で消す */}
                <div><br/><br/><br/><br/><br/><br/></div>
            </MainLayout>

            <Modal open={ModalOpen} onClose={() => {setModalOpen(!ModalOpen)}}>
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
                        p: 5
                    }}
                >
                    <Typography variant="h6" textAlign='center'>
                        ファイルを選択する
                    </Typography>
                    <Stack direction='column' justifyContent='center' sx={{ mt:30, mx:10 }}> {/*ここの mt は後で消す*/}
                        <PrimaryButton label="決定" stateAction={addFile}/>
                    </Stack>
                </Container>
            </Modal>
        </>
    )
}

export default HomePage;