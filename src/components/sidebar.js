import React from "react";

const styles = {
  sidebar: {
    width: "200px",
    backgroundColor: "#333",
    color: "white",
    padding: "15px",
    boxSizing: "border-box",
    borderRadius: "15px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: "18px",
  },
  divider: {
    fontSize: "10px",
    color: "#aaa",
    borderTop: "1px solid #555",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
  },
  listItemHeader: {
    color: "white",
    textDecoration: "none",
    fontSize: "17px",
  },
  listItemText: {
    color: "white",
    textDecoration: "none",
    fontSize: "11px",
    lineHeight: "1.5",
  },
};

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <h2 style={styles.header}>안내 사항</h2>
      <div style={styles.divider}></div>

      <ul style={styles.list}>
        <li>
          <h2 style={styles.listItemHeader}>파티 링크 생성 방법</h2>
          <div style={styles.listItemText}>
            <p>1. 링크 생성 버튼 클릭</p>
            <p>2. 공유 버튼 클릭</p>
            <p>3. 디스코드 등에 링크 게시(ctrl+v)</p>
          </div>
        </li>
        <div style={styles.divider}></div>
        <li>
          <h2 style={styles.listItemHeader}>파티 참여 방법</h2>
          <div style={styles.listItemText}>
            <p>1. 양식 작성</p>
            <p>2. 파티 신청 클릭</p>
          </div>
        </li>
        <div style={styles.divider}></div>
        <li>
          <h2 style={styles.listItemHeader}>기타 안내 사항</h2>
          <div style={styles.listItemText}>
            <p>UI 쌈마이 양해좀.... 서버 개발자라서....(계속 업데이트 예정)</p>
            <p>한시적으로 하루 길드원에게만 파티 생성 권한 부여(서버비 이슈)</p>
            <p>파티 참여는 아무나 가능</p>
          </div>
        </li>
        <div style={styles.divider}></div>
        <li>
          <h2 style={styles.listItemText}>About 개발자</h2>
          <div style={styles.listItemText}>
            <p>하루 길드 막내 용기사 홍삼룡</p>
            <a href="https://github.com/Sam-Ryong" style={{ color: "white" }}>
              https://github.com/Sam-Ryong
            </a>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
