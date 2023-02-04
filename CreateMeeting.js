import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Table,
  Row,
  Switch
} from "react-native";
import axios from "axios";

const CreateMeeting = () => {
  const [meetingDetails, setMeetingDetails] = useState({
    name: "",
    description: "",
    date: "",
    time: ""
  });

  const [scheduledMeetings, setScheduledMeetings] = useState([]);
  const [link, setLink] = useState(null);
  const [shareScreen, setShareScreen] = useState(false);
  const [useVideo, setUseVideo] = useState(false);
  const [useMic, setUseMic] = useState(false);

  const handleInput = (value, field) => {
    setMeetingDetails({ ...meetingDetails, [field]: value });
  };

  const handleCreateMeeting = async (e) => {
    const linkId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    setLink(`https://your-app.com/join-meeting/${linkId}`);
    console.log(link);
    try {
      const response = await axios.post(
        "https://your-backend-server.com/api/meetings",
        meetingDetails
      );
      setScheduledMeetings([...scheduledMeetings, response.data]);
      setMeetingDetails({
        name: "",
        description: "",
        date: "",
        time: ""
      });
      console.log(meetingDetails);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ padding: "30px 0px 30px 0px", color: "orange" }}>
        Create Meeting Here
      </Text>
      <TextInput
        style={{
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
          marginBottom: 10
        }}
        name="name"
        placeholder="Meeting name"
        value={meetingDetails.name}
        onChangeText={(text) => handleInput(text, "name")}
      />
      <TextInput
        style={{
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
          marginBottom: 10
        }}
        name="description"
        placeholder="Meeting description"
        value={meetingDetails.description}
        onChangeText={(text) => handleInput(text, "description")}
      />
      <TextInput
        style={{
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
          marginBottom: 10
        }}
        name="date"
        placeholder="Meeting date (YYYY-MM-DD)"
        value={meetingDetails.date}
        onChangeText={(text) => handleInput(text, "date")}
      />
      <TextInput
        style={{
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: "black",
          marginBottom: 10
        }}
        name="time"
        placeholder="Meeting time (HH:MM)"
        value={meetingDetails.time}
        onChangeText={(text) => handleInput(text, "time")}
      />
      <Text style={{ color: "orange" }}>Required For Meeting</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "15px"
        }}
      >
        <Text style={{ paddingRight: 55 }}>Share Screen</Text>
        <Switch
          value={shareScreen}
          onValueChange={() => setShareScreen(!shareScreen)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Text style={{ paddingRight: 70 }}>Use Video</Text>
        <Switch value={useVideo} onValueChange={() => setUseVideo(!useVideo)} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ paddingRight: 86 }}>Use Mic</Text>
        <Switch value={useMic} onValueChange={() => setUseMic(!useMic)} />
      </View>
      <TouchableOpacity
        style={{
          width: 200,
          backgroundColor: "orange",
          marginTop: "20px"
        }}
        onPress={handleCreateMeeting}
      >
        <Text>Create Meeting</Text>
      </TouchableOpacity>
      <Text
        style={{
          padding: "30px",
          fontWeight: "100%",
          color: "orange"
        }}
      >
        All Meeting Links Are Here
      </Text>
      <Text style={{ padding: "30px", color: "blue" }}>{link}</Text>
    </View>
  );
};

export default CreateMeeting;
