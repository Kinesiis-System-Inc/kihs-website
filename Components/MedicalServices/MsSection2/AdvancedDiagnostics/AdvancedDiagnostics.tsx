import React from 'react'

export const AdvancedDiagnostics = () => {
  const imgItem = ['/doct_cart.png', '/build_cart.png', '/doct_lady.png'];
  return (
    <div className="w-full mb-8 p-4 md:pl-16">
      <h2 className="text-2xl font-semibold">Advanced Diagnostics</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {/* Left Column */}
        <div>
          <p className="text-sm text-customGrey">Comprehensive Diagnostic Services</p>
          <p className="text-sm text-customGrey">Our diagnostic capabilities include:</p>
          <p className="text-sm text-customGrey">Clinical Pathology Services</p>
          <ul className="list-disc pl-6 text-customGrey text-sm space-y-1 mb-4">
            <li>Clinical Pathology</li>
            <li>X-Ray</li>
            <li> Intravenous Pyelogram (IVP)</li>
            <li>Hysterosalpingography (HSG)</li>
          </ul>
          <p className="text-sm text-customGrey">Imaging Services</p>
          <ul className="list-disc pl-6 text-customGrey text-sm space-y-1 mb-4">
            <li>Ultrasonography</li>
            <li>Sonography Guided Procedures</li>
            <li>Echocardiography</li>
          </ul>
        </div>
     
     
     
     
     
     

        {/* Right Column */}
        <div>
          <p className="text-sm text-customGrey">Specialised Diagnostic Procedures</p>
          <ul className="list-disc pl-6 text-customGrey text-sm space-y-1">
            <li>Electrocardiogram (ECG)</li>
            <li>Endoscopy</li>
            <li>Laparoscopy</li>
            <li>Hysteroscopy</li>
            <li>Cystoscopy</li>
            <li>Optometry</li>
          </ul>
        </div>
      </div>

      {/* Image Grid */}
      <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center justify-center md:justify-between gap-4 w-full mt-6'>
        {imgItem.map((item, index) => <div key={index} className='w-full flex items-center justify-center'><img src={item} className='rounded-3xl self-center' /></div>)}
      </div>
    </div>
  )
}
