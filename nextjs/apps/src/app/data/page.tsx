export default function SysCode() {
    return (

      <>
<h1 className="font-bold text-lg text-center mt-10">연계 관리ID 표준</h1>
<div className="container mt-5 p-5 mx-auto bg-sky-100 rounded-md shadow-md">
  <section className="mt-5 ml-5">
    <div><b>연계 인터페이스 아이디</b> : 연계 처리 대상에 대한 식별 아이디로 총 30자리로 구성되어 있음.</div>
  </section>
  <section className="mt-5 ml-5">
    <div><b>기본정보</b>(3자리)</div>
    <ul className="mt-1">
      <li className="list-disc">연계구분 : 외부연계(External), 내부연계(Internal) 중 택1</li>
      <li className="list-disc">연계방식 : 실시간(Realtime), 배치(Batch) 중 택1</li>
      <li className="list-disc">연계유형 :  DB2DB(D), File2File(F), File2DB(B), Restful(R), 웹서비스(W), TCP(T) 중 택1</li>
    </ul>
  </section>  
  <section className="mt-5 ml-5">
    <div><b>시스템 코드</b>(10자리)</div>
    <ul className="mt-1">
      <li className="list-disc">행정기관표준코드(7자리)+시스템코드(3자리)</li>
    </ul>
    <div className="ml-3 mt-3">※ 예외사항 : 행정기관표준코드가 없는 기관의 경우 특정문자로 시작하며 임의로 일련번호 부여</div>
  </section>
  <section className="mt-5 ml-5">
    <div><b>일련번호</b>(4자리)</div>
    <ul className="mt-1">
      <li className="list-disc">4자리 숫자로 연계 대상 기관/시스템 별 인터페이스 아이디에 대하여 순차적으로 번호 부여.</li>
    </ul>
    <div className="ml-3 mt-3">※ 구성 예 : EBD_1613000001_1741000TAS_0020</div>
  </section>      
</div>
      </>
    );
  }
  