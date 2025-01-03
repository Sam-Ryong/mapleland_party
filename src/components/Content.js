import React, { useState } from "react";

const styles = {
  content: {
    width: "100%",
    backgroundColor: "#333",
    color: "white",
    padding: "15px",
    boxSizing: "border-box",
    borderRadius: "15px",
    margin: "10px 0",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  input: {
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  label: {
    fontSize: "16px",
    marginBottom: "3px",
  },
  row: {
    display: "flex",
    gap: "10px",
    flexWrap: "nowrap", // Prevents wrapping
    overflow: "auto", // Ensures inputs don't overflow
  },
  smallInput: {
    flex: "1", // Makes each input take equal space
    minWidth: "150px", // Minimum width to prevent inputs from shrinking too much
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#555",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#c44",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "5px",
  },
};

const MainContent = () => {
  const [partyName, setPartyName] = useState("");
  const [huntingLocation, setHuntingLocation] = useState("");
  const [leaderNickname, setLeaderNickname] = useState("");
  const [leaderLevel, setLeaderLevel] = useState("");
  const [leaderJob, setLeaderJob] = useState("");
  const [leaderPosition, setLeaderPosition] = useState("");

  // Initialize with one member by default
  const [members, setMembers] = useState([
    { position: "", qualification: "", notes: "" },
  ]);

  const handleSubmit = () => {
    console.log({
      partyName,
      huntingLocation,
      leaderNickname,
      leaderLevel,
      leaderJob,
      leaderPosition,
      members,
    });
    alert("파티 정보가 제출되었습니다!");
  };

  const handleAddMember = () => {
    if (members.length < 9) {
      setMembers([...members, { position: "", qualification: "", notes: "" }]);
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  return (
    <div style={styles.content}>
      <label style={styles.label}>파티 정보</label>
      <div style={styles.row}>
        <input
          style={styles.smallInput}
          type="text"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
          placeholder="파티 이름"
        />
        <input
          style={styles.smallInput}
          type="text"
          value={huntingLocation}
          onChange={(e) => setHuntingLocation(e.target.value)}
          placeholder="사냥 장소"
        />
      </div>

      <label style={styles.label}>파티장 정보</label>
      <div style={styles.row}>
        <input
          style={styles.smallInput}
          type="text"
          value={leaderNickname}
          onChange={(e) => setLeaderNickname(e.target.value)}
          placeholder="닉네임"
        />
        <input
          style={styles.smallInput}
          type="number"
          value={leaderLevel}
          onChange={(e) => setLeaderLevel(e.target.value)}
          placeholder="레벨"
        />
        <input
          style={styles.smallInput}
          type="text"
          value={leaderJob}
          onChange={(e) => setLeaderJob(e.target.value)}
          placeholder="직업"
        />
        <input
          style={styles.smallInput}
          type="text"
          value={leaderPosition}
          onChange={(e) => setLeaderPosition(e.target.value)}
          placeholder="포지션"
        />
      </div>

      <label style={styles.label}>구인 공고</label>
      {members.map((member, index) => (
        <div style={styles.row} key={index}>
          <input
            style={styles.smallInput}
            type="text"
            value={member.position}
            onChange={(e) =>
              handleMemberChange(index, "position", e.target.value)
            }
            placeholder="포지션(ex 우1, 중앙)"
          />
          <input
            style={styles.smallInput}
            type="text"
            value={member.qualification}
            onChange={(e) =>
              handleMemberChange(index, "qualification", e.target.value)
            }
            placeholder="지원자격(ex 3000++ 허밋)"
          />
          <input
            style={styles.smallInput}
            type="text"
            value={member.notes}
            onChange={(e) => handleMemberChange(index, "notes", e.target.value)}
            placeholder="비고(ex 심비 40)"
          />
          <button
            style={styles.deleteButton}
            onClick={() => handleRemoveMember(index)}
          >
            삭제
          </button>
        </div>
      ))}

      <button
        style={styles.button}
        onClick={handleAddMember}
        disabled={members.length >= 9}
      >
        인원 추가
      </button>

      <button style={styles.button} onClick={handleSubmit}>
        파티 링크 생성
      </button>
    </div>
  );
};

export default MainContent;
