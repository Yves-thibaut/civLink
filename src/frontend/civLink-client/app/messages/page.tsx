'use client';

import { useState } from 'react';
import Layout from '@/src/frontend/components/Layout';
import { Button } from '@/src/frontend/components/ui/button';
import { Input } from '@/src/frontend/components/ui/input';
import { Card, CardContent, CardHeader } from '@/src/frontend/components/ui/card';
import { Badge } from '@/src/frontend/components/ui/badge';
import { Search, Send, Paperclip, Phone, Video, MoreVertical, Plus, MessageCircle, Users } from 'lucide-react';
import { oscs } from '@/src/frontend/lib/data';

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState('1');
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: '1',
      name: 'Green Belt Movement',
      avatar: oscs[1].image,
      lastMessage: 'Merci pour les informations sur le projet de reforestation. Nous sommes très intéressés par une collaboration.',
      timestamp: '14:30',
      unread: 2,
      online: true,
      country: '🇰🇪'
    },
    {
      id: '2',
      name: 'EduAfrica',
      avatar: oscs[3].image,
      lastMessage: 'Le document que vous avez partagé est très utile. Pouvons-nous programmer un appel vidéo cette semaine ?',
      timestamp: '12:15',
      unread: 0,
      online: true,
      country: '🇸🇳'
    },
    {
      id: '3',
      name: 'Women Empowerment Hub',
      avatar: oscs[4].image,
      lastMessage: 'Excellent ! Notre équipe va examiner la proposition et vous recontacter rapidement.',
      timestamp: 'Hier',
      unread: 1,
      online: false,
      country: '🇬🇭'
    },
    {
      id: '4',
      name: 'Médecins d\'Afrique',
      avatar: oscs[2].image,
      lastMessage: 'Nous organisons une mission médicale le mois prochain. Votre OSC pourrait-elle nous aider avec la logistique ?',
      timestamp: 'Hier',
      unread: 0,
      online: false,
      country: '🇲🇱'
    },
    {
      id: '5',
      name: 'Africa Youth Network',
      avatar: oscs[5].image,
      lastMessage: 'Le hackathon a été un succès ! Merci pour votre participation. Voici le rapport final.',
      timestamp: '2 jours',
      unread: 0,
      online: true,
      country: '🇳🇬'
    }
  ];

  const messages = [
    {
      id: '1',
      sender: 'Green Belt Movement',
      content: 'Bonjour ! Nous avons vu votre projet sur l\'éducation environnementale. C\'est exactement ce que nous recherchons pour notre programme.',
      timestamp: '10:30',
      isOwn: false,
      avatar: oscs[1].image
    },
    {
      id: '2',
      sender: 'Vous',
      content: 'Merci pour votre message ! Je serais ravi de discuter de notre approche. Nous avons développé un curriculum très efficace.',
      timestamp: '10:45',
      isOwn: true
    },
    {
      id: '3',
      sender: 'Green Belt Movement',
      content: 'Parfait ! Pourriez-vous nous envoyer quelques exemples de matériels pédagogiques que vous utilisez ?',
      timestamp: '11:00',
      isOwn: false,
      avatar: oscs[1].image
    },
    {
      id: '4',
      sender: 'Vous',
      content: 'Bien sûr ! Je vais vous envoyer notre guide d\'activités et quelques études de cas. Vous devriez les recevoir dans quelques minutes.',
      timestamp: '11:15',
      isOwn: true
    },
    {
      id: '5',
      sender: 'Green Belt Movement',
      content: 'Merci pour les informations sur le projet de reforestation. Nous sommes très intéressés par une collaboration.',
      timestamp: '14:30',
      isOwn: false,
      avatar: oscs[1].image
    }
  ];

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const sendMessage = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText('');
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg border overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
          <div className="flex h-full">
            {/* Conversations List */}
            <div className="w-1/3 border-r flex flex-col">
              {/* Header */}
              <div className="p-4 border-b bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-xl font-bold text-gray-900">Messages</h1>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-1" />
                    Nouveau
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher des conversations..."
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                      selectedConversation === conversation.id ? 'bg-orange-50 border-r-2 border-r-orange-500' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                            <span className="text-lg">{conversation.country}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                            {conversation.unread > 0 && (
                              <Badge className="bg-orange-500 text-white text-xs px-2 py-0.5">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">{conversation.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedConv ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={selectedConv.avatar}
                            alt={selectedConv.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {selectedConv.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h2 className="font-semibold text-gray-900">{selectedConv.name}</h2>
                            <span className="text-lg">{selectedConv.country}</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {selectedConv.online ? 'En ligne' : 'Hors ligne'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex max-w-xs lg:max-w-md ${message.isOwn ? 'flex-row-reverse' : 'flex-row'} space-x-2`}>
                          {!message.isOwn && message.avatar && (
                            <img
                              src={message.avatar}
                              alt={message.sender}
                              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                            />
                          )}
                          <div className={`px-4 py-2 rounded-lg ${message.isOwn ? 'bg-orange-500 text-white ml-2' : 'bg-gray-100 text-gray-900 mr-2'}`}>
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${message.isOwn ? 'text-orange-100' : 'text-gray-500'}`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Paperclip className="h-4 w-4" />
                      </Button>
                      <Input
                        placeholder="Tapez votre message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        className="flex-1"
                      />
                      <Button onClick={sendMessage} disabled={!messageText.trim()}>
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sélectionnez une conversation</h3>
                    <p className="text-gray-600">
                      Choisissez une conversation dans la liste pour commencer à discuter.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card className="border-dashed border-2 border-orange-200 hover:border-orange-300 cursor-pointer transition-colors">
            <CardContent className="p-6 text-center">
              <Plus className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Nouveau message</h3>
              <p className="text-sm text-gray-600">Commencer une conversation avec une OSC</p>
            </CardContent>
          </Card>
          
          <Card className="border-dashed border-2 border-blue-200 hover:border-blue-300 cursor-pointer transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Créer un groupe</h3>
              <p className="text-sm text-gray-600">Discussion de groupe avec plusieurs OSC</p>
            </CardContent>
          </Card>
          
          <Card className="border-dashed border-2 border-green-200 hover:border-green-300 cursor-pointer transition-colors">
            <CardContent className="p-6 text-center">
              <Video className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Planifier un appel</h3>
              <p className="text-sm text-gray-600">Organiser une réunion vidéo</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}