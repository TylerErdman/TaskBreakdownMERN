import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'redux-first-history';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';
import Content from 'react-bulma-companion/lib/Content';

import styles from './styles.module.css';

export default function WelcomePage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  useEffect(() => {
    if (!R.isEmpty(user)) {
      dispatch(push('/home'));
    }
  }, [dispatch, user]);

  return (
    <div className={styles.root}>
      <Section>
        <Container>
          <Title size="1">
            Welcome!
          </Title>
          <Content>
            Hello, this is TaskBreakdown!
            This is designed as a simple tool to create and manage small projects as a learning experience.
          </Content>
          <Content>
            This was created by Tyler Erdman.
          </Content>
        </Container>
      </Section>
    </div>
  );
}
