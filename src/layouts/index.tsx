import { Layout } from 'antd';
import React from 'react';
import { Entry } from './Entry';
import { EntryContainer } from './EntryContainer';
import styles from './index.less';

const { Content, Sider } = Layout;

const GlobalLayoutPage: React.FC = props => {
  return (
    <Layout>
      <Sider className={styles.sider}>
        <EntryContainer>
          <Entry key={'/'} />
          <Entry key={'triangle-line'} />
        </EntryContainer>
      </Sider>
      <Content>
      {props.children}
      </Content>
    </Layout>
  );
};

export default GlobalLayoutPage;
