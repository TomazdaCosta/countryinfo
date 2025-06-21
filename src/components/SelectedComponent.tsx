import React from 'react'

type SelectedProps = React.ComponentProps<'select'> & {
  func: (lingName: string) => void
}

const SelectedComponent = ({value, func}: SelectedProps) => {
  return (
    <div className='grid'>
      <label className='font-mono uppercase text-sm justify-self-end' htmlFor="ling">Nome dos países em</label>
      <select
        className='bg-blue-200 max-w-max text-blue-950 pt-1 pb-1 pl-2 rounded-2xl justify-self-end'
        name="ling"
        id="ling"
        value={value}
        onChange={(ev) => func(ev.target.value)}
      >
        <option value="ara">ara</option>
        <option value="bre">bre</option>
        <option value="ces">ces</option>
        <option value="cym">cym</option>
        <option value="deu">deu</option>
        <option value="est">est</option>
        <option value="fin">fin</option>
        <option value="fra">fra</option>
        <option value="hrv">hrv</option>
        <option value="hun">hun</option>
        <option value="ita">ita</option>
        <option value="jpn">jpn</option>
        <option value="kor">kor</option>
        <option value="nld">nld</option>
        <option value="per">per</option>
        <option value="pol">pol</option>
        <option value="por">por</option>
        <option value="rus">rus</option>
        <option value="slk">slk</option>
        <option value="spa">spa</option>
        <option value="srp">srp</option>
        <option value="swe">swe</option>
        <option value="tur">tur</option>
        <option value="urd">urd</option>
        <option value="zho">zho</option>
      </select>
    </div>
  )
}

export default SelectedComponent
