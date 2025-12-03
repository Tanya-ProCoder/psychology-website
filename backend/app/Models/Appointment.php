<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'message',
        'preferred_date',
        'preferred_time',
        'service_type',
        'status',
        'ip_address',
        'user_agent'
    ];

    protected $casts = [
        'preferred_date' => 'date',
        'preferred_time' => 'datetime'
    ];
}