import withLayout from './hoc/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'
import Panel from '../components/panel'
import Menu from '../components/menu'
import Drawer from '../components/drawer'
import Icon from '../components/icon'
import IconCommonSprite from '../components/sprites/icon-common'
import ScreenStyle from '../styles/screen'
import PrintStyle from '../styles/print'

export default withLayout(({ title, printTitle, children }) => (
    <>
        <Drawer>
            <Header>
                <h1 className="only-screen">{title}</h1>
                <h1 className="only-print">{printTitle || title}</h1>
            </Header>
            <div className="view-wide">
                <Section>
                    <Panel>
                        <Menu menuId="main" />
                    </Panel>
                </Section>
            </div>
            <main>{children}</main>
            <Footer>
                <a href="https://www.linkedin.com/in/ilmente" target="_blank">
                    <Icon name="linkedin" />
                </a> <a href="https://github.com/ilmente/ilmente.com" target="_blank">
                    <Icon name="github" />
                </a> <a href="https://www.instagram.com/ilmente" target="_blank">
                    <Icon name="instagram" />
                </a> | ilmente.com
            </Footer>
        </Drawer>
        <ScreenStyle />
        <PrintStyle />
        <IconCommonSprite />
    </>
))
