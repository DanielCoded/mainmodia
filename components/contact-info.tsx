import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-[#3D0C11]">Get in Touch</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-[#3D0C11] mr-4 mt-1" />
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-gray-600">No 2 Michika street off Ahmadu Bello way Area 11 Garki Abuja Nigeria</p>
          </div>
        </div>
        <div className="flex items-center">
          <Phone className="w-6 h-6 text-[#3D0C11] mr-4" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-gray-600">+234 803 974 3274</p>
            <p className="text-gray-600">+234 813 538 9424</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="w-6 h-6 text-[#3D0C11] mr-4" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-gray-600">modiaproperties@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="w-6 h-6 text-[#3D0C11] mr-4 mt-1" />
          <div>
            <h3 className="font-medium">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

