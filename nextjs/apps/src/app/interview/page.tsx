export default function Interview() {
  return (
    <>
    <h1 className="font-bold text-[24px] mt-10 text-center">인터뷰 추가질의서</h1>
    <div className="container p-5 mx-auto">
      <div className="py-2 my-2">
        <div className="bg-sky-50 p-5 rounded-md my-10 shadow-md shadow-gray-400"><span className="font-bold text-md">인터뷰 추가질의 내용</span>
          <ol className="list-decimal pl-4">
            <li className="my-5">현행 지방세 시스템의 기관 및 시스템의 장애/해소 관련 정보는 어떤 방법을 통해 공유하는지?
              <div className="mt-2">SPM 장애 보고 절차대로 보고(유선, 장애/해소 공지)</div>
            </li>
            <li className="my-5">현행 지방세 시스템의 연계 솔루션 자체 부하분산 및 Fail-over기능에 대한 방안은?
              <ul>
                <li className="mt-2 text-red-800">(인디고)
                  <ul className="pl-4 list-disc">
                    <li>연계 솔루션 주요 광역자치단체 및 도단위 Queue 분산 구성 및 처리 adaptor 개별 구성</li>
                    <li>대국민DB #1~3 Fail-over 구성</li>
                  </ul>
                </li>
                <li className="mt-2">(메가웨어)
                  <ul>
                    <li>L4 에서 이중화 되어있는 연계VM 에 부하분산 처리를 해주고 있음.</li>
                    <li>Active-Active 일 경우, 1번 노드 서비스가 내려가더라도 모든 서비스를 2번 노드에서 처리함.</li>
                    <li>Active-StandBy 일 경우, 메가웨어 자체 기능으로 리스너를 통한 Fail-over 기능 처리 또는 L4 에서 로드밸런싱 방식 변경하여 처리.</li>
                  </ul>
                </li>
                <li className="mt-2">(MPower)
                  <ul>
                    <li>세무행정DB #1~3 Fail-over 구성</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="my-5">현행 지방세 시스템의 행공센, 표준연계 방식을 제외한 타 기관 연계는 어떻게 구성되어 있는가?
              <ul>
                <li className="mt-2">(인디고)
                  <div>현재 INDIGO ESB를 통한 연계는 지방세-새올행정시스템 일부 세목 DB2DB,DF2FD 방식만 활용 중</div>
                </li>
                <li className="mt-2">(메가웨어)
                  <div>TX_INF_DE41_소프트웨어아키텍처설계서_연계_v1.2.pptx 참고</div>
                </li>
                <li className="mt-2">(systemier, MPower)
                    <ul>
                      <li>Mpower : 서울시 연계 실시간 조회 이용</li>
                      <li>Systemier : 서울시 연계 db2db, 파일연계 이용</li>
                    </ul>
                </li>
              </ul>
            </li>
            <li className="my-5">연계 솔루션의 메타 정보는 어떤 방식으로 저장되며, 어떻게 관리되는가?
                <ul>
                  <li className="mt-2">(인디고)
                    <div>
                      <ul>
                        <li>INDIGO ESB :adaptor_template.xml에 DB2DB 송수신, 대용량DF2FD 연계 처리 스케쥴 등록</li>
                        <li>수신 처리: 연계 솔루션 QUEUE를 통해 DB2DB 메시지 수신. 트렌잭션 메타정보를 통해 지역별 분산된 adaptor의 query.xml을 통해 수신 처리</li>
                        <li>관리 : 연계정의서를 통해 정의된 트랜잭션ID,송수신기관 코드 등 메타데이터 21개를 통해 트랜잭션 관리</li>
                      </ul>
                    </div>
                  </li>
                  <li className="mt-2">(메가웨어)
                    <div>솔루션 콘솔에서 Key Name, Value 값을 저장하게 되면 특정테이블에서 이력관리</div>
                  </li>
                  <li className="mt-2">(systemier, MPower)
                      <ul>
                        <li>Systemier : systemier_config.xml 에 d2d 송신, 파일연계 관리
                          <div>d2d수신 시 EPCTNDBTODBQUERY 에 insert 쿼리 저장(암호화 관련)</div></li>
                        <li>Mpower :
                          <div>/app/MPowerPlus/registration/ ~ : .widl 파일로 연계 호출 메타정보 관리
                          /app/MPowerPlus/cmpools/~ : .xls로 연계 항목 관리</div>
                        </li>
                      </ul>     
                  </li>
                </ul>
            </li>
          </ol>
        </div>
        <div className="bg-green-50 p-5 rounded-md my-10 shadow-md shadow-gray-400">요청자료
          <ol className="list-decimal pl-4">
            <li className="my-5">현행 지방세 시스템에 적용된 연계 방식별 간략한 설명과 필수 구성요소 예시
              <ul>
                <li className="mt-2">MPower: MPower_Plus_교육자료_Ver2_1.pdf 참고</li>
                <li className="mt-2">(systemier)
                  <div>SYSTEMiER_Integration_Suite@Lite_Administration_Guide.pdf 참고</div>
                </li>
                <li className="mt-2">(메가웨어)
                  <div>TX_INF_DE41_소프트웨어아키텍처설계서_연계_v1.2.pptx 참고</div>
                </li>
                <li className="mt-2">(인디고)
                  <div>INDIGO ESB 연계 가이드_v1.7_202402.hwp 참고</div>
                </li>
              </ul>
            </li>
            <li className="my-5">현행 지방세 시스템의 솔루션별 대상기관, 연계 방식 목록 및 현황자료
              <ul>
                <li className="mt-2">(systemier, MPower)
                  <div>서울시 세무종합시스템, 서울etax, 서울시_연계 통합목록.xlsx 참고</div>
                </li>
                <li className="mt-2">(메가웨어)
                  <div>연계현황_240925_대외_대내[수정본].xlsx 참고</div>
                </li>
                <li className="mt-2">(인디고)
                  <div>새올행정시스템, INDIGO ESB_연계 목록.xlsx 참고</div>
                </li>
              </ul>
            </li>
            <li className="my-5">현행 지방세 시스템의 라이선스 수량 및 연계 구성 현황자료 요청
              <ul>
                <li className="mt-2">(systemier, MPower)
                  <div>License_MPower_Systemier.xlsx 참고, 서울시연계구성도_20240223.pptx</div>
                </li>
                <li className="mt-2">(메가웨어)
                  <div>License_메가웨어.xlsx, License_지자체_현황.xlsx 참고, TX_INF_DE41_소프트웨어아키텍처설계서_연계_v1.2.pptx 참고</div>
                </li>
                <li className="mt-2">(인디고)
                  <div>License_인디고.xlsx 참고</div>
                </li>
              </ul>
            </li>
            <li className="my-5">연계SW 수량, 규격, 버전 현행화 자료
              <ul>
                <li className="mt-2">(systemier, MPower)
                  <div>License_MPower_Systemier.xlsx 참고</div>
                </li>
                <li className="mt-2">(메가웨어)
                  <div>License_메가웨어.xlsx, License_지자체_현황.xlsx 참고</div>
                </li>
                <li className="mt-2">(인디고)
                  <div>License_인디고.xlsx 참고</div>
                </li>
              </ul>
            </li>
            <li className="my-5">차세대 지방세 시스템 구축 후, 운영 중에 신규 발생한 인터페이스 정보 요청
              <ul>
                <li className="mt-2">(systemier, MPower)
                  <div>서울시_연계 통합목록.xlsx 참고 (2024.2.17 오픈이후 참고)</div>
                </li>
                <li className="mt-2">(메가웨어)
                  <div>오픈 이후 신규 생성 인터페이스.xlsx 참고</div>
                </li>
                <li className="mt-2">(인디고)
                  <div>해당없음</div>
                </li>
              </ul>
            </li>
            <li className="my-5">연계 시스템 아키텍처 구성 현황
              <div>TX_INF_DE41_소프트웨어아키텍처설계서_연계_v1.2.pptx 참고</div>
            </li>
            <li className="my-5">하드웨어, 소프트웨어, 네트워크 구성 정보 요청
              <div className="my-5">하드웨어,네트워크 구성 정보는 연계 영역 아님(인프라 또는 기술지원팀에 요청)</div>
              <div className="my-5">메가웨어 : TX_INF_DE41_소프트웨어아키텍처설계서_연계_v1.2.pptx 참고,</div>
              <div>제출자료\연계 소프트웨어 정보 폴더 참고</div>
            </li>
            <li className="my-5">행공센, 표준연계 방식 외 타 연계 모듈 사용 현황자료 요청
              <div>해당없음</div>
            </li>
            <li className="my-5">연계 데이터량 : 기간별 최대치량, 건수, 파일의 경우 최대 크기 용량
              <div>제출자료\연계 데이터량 폴더 참고</div>
            </li>
            <li className="my-5">연계 담당자, 연계 시스템 네트워크 담당자 연락처 요청
              <table className="mt-5">
                <thead className="text-center font-bold border-slate-400  bg-gray-200">
                  <tr>
                    <td>부서</td>
                    <td>연락처</td>
                  </tr>
                </thead>
                <tbody className="bg-white border border-spacing-1 border-collapse">
                  <tr className="border border-spacing-1 border-collapse">
                    <td className="px-3 font-bold py-2">systemier, MPower</td>
                    <td className="px-3 py-2">선효정 차장(02-2139-9367), 김태용 부장(02-2139-9440)</td>
                  </tr>
                  <tr className="border border-spacing-1 border-collapse">
                    <td className="px-3 font-bold py-2">메가웨어</td>
                    <td className="px-3 py-2">송원민 대리(02-2139-9389), 임태근 사원(02-2139-9389)</td>
                  </tr>
                  <tr className="border border-spacing-1 border-collapse">
                    <td className="px-3 font-bold py-2">인디고</td>
                    <td className="px-3 py-2">김한수 과장(02-2139-9442, 010-5021-5982)</td>
                  </tr>
                  <tr className="border border-spacing-1 border-collapse">
                    <td className="px-3 font-bold py-2">인프라 관련(KLID 운영팀)</td>
                    <td className="px-3 py-2">고동성 부장(010-4890-9027)</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </div>
      </div>
    </div>
    </>
  );
}
