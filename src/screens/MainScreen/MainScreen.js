import {
  Body,
  Button,
  Col,
  Container,
  Content,
  Header,
  Icon,
  Picker,
  Row,
  Text,
  Title,
} from "native-base";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCourses,
  getFacultaties,
  getGroups,
} from "../../store/actions/facultaties";

const MainScreen = () => {
  const dispatch = useDispatch();

  const facultaties = useSelector((state) => state.facultaties.facultaties);
  const courses = useSelector((state) => state.facultaties.courses);
  const groups = useSelector((state) => state.facultaties.groups);

  const getAllFacultaties = () => {
    dispatch(getFacultaties());
  };

  const [selectedFacultatie, setSelectedFacultatie] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    getAllFacultaties();
  }, []);

  useEffect(() => {
    dispatch(getCourses({ facultatie: selectedFacultatie }));
  }, [selectedFacultatie]);

  useEffect(() => {
    dispatch(
      getGroups({ facultatie: selectedFacultatie, course: selectedCourse })
    );
  }, [selectedCourse]);

  return (
    <Container>
      <Header>
        <Body>
          <Title>Выбор группы</Title>
        </Body>
      </Header>
      <Content>
        <Row>
          <Col>
            <Text>Кафедра</Text>
            <Picker
              selectedValue={selectedFacultatie}
              onValueChange={setSelectedFacultatie}
              mode="dialog"
              iosHeader="Оберіть кафедру"
              style={{ width: "90%" }}
              iosIcon={<Icon name="arrow-down" />}
            >
              {facultaties.map((item) => {
                return <Picker.Item value={item.id} label={item.alias} />;
              })}
            </Picker>
          </Col>
        </Row>

        {selectedFacultatie && (
          <Row>
            <Col>
              <Text>Курс</Text>
              <Picker
                selectedValue={selectedCourse}
                onValueChange={setSelectedCourse}
                mode="dialog"
                iosHeader="Оберіть курс"
                style={{ width: "90%" }}
                iosIcon={<Icon name="arrow-down" />}
              >
                {courses.map((item) => {
                  return <Picker.Item value={item.id} label={item.alias} />;
                })}
              </Picker>
            </Col>
          </Row>
        )}

        {selectedCourse && (
          <Row>
            <Col>
              <Text>Группа</Text>
              <Picker
                selectedValue={selectedGroup}
                onValueChange={setSelectedGroup}
                mode="dialog"
                iosHeader="Оберіть группу"
                style={{ width: "90%" }}
                iosIcon={<Icon name="arrow-down" />}
              >
                {groups.map((item) => {
                  return <Picker.Item value={item.id} label={item.alias} />;
                })}
              </Picker>
            </Col>
          </Row>
        )}

        <Button onPress={getAllFacultaties}>
          <Text>Get</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default MainScreen;
